import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { CDN_URL } from '../utils/constants';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (!resInfo) return <Shimmer />;

    const { name, cuisines, costForTwo, avgRating, sla } =
        resInfo?.cards[0]?.card?.card?.info || {};

    // Extract menu items from REGULAR section
    const regularCards = resInfo?.cards?.find(
        (card) => card?.groupedCard?.cardGroupMap?.REGULAR
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const itemCards = [];

    regularCards.forEach((card) => {
        const items = card?.card?.card?.itemCards;
        if (items) itemCards.push(...items);
    });

    return (
        <div className="px-6 py-8">
            {/* Restaurant Info Header */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
                <p className="text-gray-600">{cuisines?.join(', ')}</p>
                <p className="text-gray-600">{costForTwo}</p>
                <div className="mt-2 text-sm text-yellow-600 font-medium">
                    ⭐ {avgRating} | {sla?.deliveryTime} mins
                </div>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {itemCards.length > 0 ? (
                    itemCards.map((item) => {
                        const info = item.card.info;
                        return (
                            <div
                                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
                                key={info.id}
                            >
                                {info.imageId && (
                                    <img
                                        src={CDN_URL + info.imageId}
                                        alt={info.name}
                                        className="w-full h-40 object-cover"
                                    />
                                )}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{info.name}</h3>
                                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                                        {info.description || 'No description available'}
                                    </p>
                                    <div className="flex justify-between items-center text-sm text-gray-700">
                                        <span>
                                            ⭐ {info.ratings?.aggregatedRating?.rating || 'N/A'}
                                        </span>
                                        <span className="font-semibold">
                                            ₹{(info.price || info.defaultPrice) / 100}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        No menu items available.
                    </p>
                )}
            </div>


        </div>
    );
};

export default RestaurantMenu;
