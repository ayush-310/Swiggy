import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (!resInfo) return <Shimmer />;

    // const restaurantDetails = resInfo?.cards?.find(card => card?.card?.card?.info)?.card?.card?.info;

    // if (!restaurantDetails) return <p>Error loading menu details.</p>;

    const { name, cuisines, costForTwo,avgRating } = resInfo?.cards[0]?.card?.card?.info ;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>Menu</h2>
            <h3>{cuisines?.join(', ') || 'No cuisine info available'}</h3>
            <p>⭐ {avgRating} | 💰 {costForTwo}</p>
            <ul>
                {resInfo?.cards?.map((card, index) => (
                    card?.card?.card?.title ? <li key={index}>{card.card.card.title}</li> : null
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
