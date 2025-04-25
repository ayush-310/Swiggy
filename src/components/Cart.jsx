import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice"; // Adjust the path based on your project

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-gray-600 text-lg">Your cart is currently empty.</p>
            ) : (
                <>
                    <ItemList items={cartItems} />
                    <button
                        onClick={handleClearCart}
                        className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                        Clear Cart
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
