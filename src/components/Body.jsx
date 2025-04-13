import React, { useEffect, useState } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchText, setSearchText] = useState('');

    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        const resList2 = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setResList([...resList2]);
        setFilteredResList([...resList2]);
    };

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return (
            <div className="text-center text-xl text-red-600 mt-10">
                Looks like you are offline. Please check your internet connection.
            </div>
        );
    }

    return resList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="p-6">
            {/* Search and Filter Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div className="flex gap-2 items-center">
                    <input
                        type="text"
                        placeholder="Search restaurants..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        onClick={() => {
                            const filteredList = resList.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredResList(filteredList);
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Search
                    </button>
                    <button
                        onClick={() => setFilteredResList(resList)}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                    >
                        Reset
                    </button>
                </div>

                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => {
                            const topRated = resList.filter((res) => res.info.avgRating > 4.3);
                            setFilteredResList(topRated);
                        }}
                        className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Top Rated Restaurants
                    </button>

                    <button
                        onClick={() => {
                            const promotedList = resList.filter((res) => res.info.promoted === true);
                            setFilteredResList(promotedList);
                        }}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
                    >
                        Show Promoted Restaurants
                    </button>
                </div>
            </div>

            {/* Restaurant Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredResList?.map((resData) => (
                    <Link
                        key={resData.info.id}
                        to={'/restaurants/' + resData.info.id}
                        className="no-underline"
                    >
                        {resData.info.promoted ? (
                            <PromotedRestaurantCard resData={resData} />
                        ) : (
                            <RestaurantCard resData={resData} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
