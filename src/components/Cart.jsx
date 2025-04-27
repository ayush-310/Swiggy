import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice"; // Adjust the path based on your project

const Cart = () => {
    const dispatch = useDispatch();

    // Method1 - Subscribing to the store using a Selector - Selecting only the required data
    const cartItems = useSelector((store) => store.cart.items);

    // Method2 - But very less efficient - never use this method
    // const store = useSelector((store) => store);
    // const cartItems = store.cart.items; // Accessing the cart items from the store



    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Cart</h1>
            <button
                onClick={handleClearCart}
                className="mt-6 mb-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
                Clear Cart
            </button>

            {cartItems.length === 0 ? (
                <p className="text-gray-600 text-lg">Your cart is currently empty.</p>
            ) : (
                <>
                    <ItemList items={cartItems} />

                </>
            )}
        </div>
    );
};

export default Cart;
