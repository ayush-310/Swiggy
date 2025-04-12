// Body.jsx
import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {

    const [ResList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        // const resList1 = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        const resList2 = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        // setResList([...resList1, ...resList2]);
        setResList([...resList2]);
        // setFilteredResList(ResList)
        setFilteredResList([...resList2])

    }


    const onLineStatus = useOnlineStatus();

    if (!onLineStatus) {
        return <h1>Looks like you are offline. Please check your internet connection.</h1>
    }

    return ResList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className='filter'>
                <div className='search'>

                    <input type="text"
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }}
                        className='search-Box' />

                    <button onClick={() => {
                        const FilterList = ResList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredResList(FilterList);
                    }} > Search</button>

                    <button
                        className='reset-btn'
                        onClick={() => setFilteredResList(ResList)}
                    >
                        Reset Filters
                    </button>
                </div>

                <button
                    className='filter-btn'
                    onClick={() => {
                        const TopRatedRes = ResList.filter((res) => res.info.avgRating > 4.3);
                        setFilteredResList(TopRatedRes); // Corrected here
                    }}
                >
                    Top Rated Restaurants
                </button>



            </div>
            {/* <div className="search">Search</div> */}
            <div className="res-container">
                {filteredResList?.map((resData, index) => (
                    <Link style={{ textDecoration: "none" }} key={resData.info.id} to={'/restaurants/' + resData.info.id}>
                        <RestaurantCard resData={resData} />
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default Body
