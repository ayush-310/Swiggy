import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import Shimmer from './Shimmer';

const Body = () => {

    const [ResList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

                </div>

                <button
                    className='filter-btn'
                    onClick={() => {
                        const TopRatedRes = resList.filter((res) => res.info.avgRating > 4.2);
                        setResList(TopRatedRes);
                    }} >Top Rated Restaurants</button>
            </div>
            {/* <div className="search">Search</div> */}
            <div className="res-container">
                {filteredResList?.map((resData, index) => (
                    <RestaurantCard key={resData.info.id} resData={resData} />
                ))}
            </div>
        </div >
    )
}

export default Body
