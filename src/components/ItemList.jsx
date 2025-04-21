import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    return (
        <div className="space-y-4">
            {items.map((item, index) => {
                const info = item.card.info;
                return (
                    <div
                        key={index}
                        className="flex justify-between gap-4 items-start p-4 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Text Info */}
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800">{info.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                {info.description || "No description available"}
                            </p>
                            <p className="text-base text-gray-700 font-medium mt-2">
                                ₹{(info.price || info.defaultPrice) / 100}
                            </p>
                        </div>

                        {/* Image and Add Button */}
                        <div className="flex flex-col items-center gap-2">
                            {info.imageId && (
                                <img
                                    src={CDN_URL + info.imageId}
                                    alt={info.name}
                                    className="w-24 h-24 object-cover rounded-md shadow-sm"
                                />
                            )}

                            <button className="mt-2 px-4 py-1 border  text-white font-semibold rounded-md bg-black transition-colors duration-200">
                                Add +
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
