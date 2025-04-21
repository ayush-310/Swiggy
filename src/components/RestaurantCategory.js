import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div className="w-11/12 sm:w-8/12 md:w-6/12 m-auto border border-gray-200 rounded-lg shadow-sm mb-4 bg-white">
            {/* Accordion Header */}
            <div
                className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                onClick={handleClick}>
                <span className="text-lg font-medium text-gray-800">
                    {data.title} ({data.itemCards.length})
                </span>
                <span className="text-xl">
                    {showItems ? "▲" : "▼"}
                </span>
            </div>

            {/* Accordion Body */}
            {showItems && (
                <div className="px-4 py-2 text-gray-600 text-sm">
                    <ItemList items={data.itemCards} />
                </div>
            )}
        </div>
    );
};

export default RestaurantCategory;
