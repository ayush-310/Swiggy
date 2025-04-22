import React, { useContext, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
    const [buttonName, setButtonName] = useState('Login');
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    return (
        <header className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
            {/* Logo */}
            <div className="flex items-center">
                <img
                    src={LOGO_URL}
                    alt="Food Delivery Logo"
                    className="h-24 w-auto object-contain"
                />
            </div>

            {/* Navigation */}
            <nav>
                <ul className="flex items-center space-x-6 text-gray-700 font-medium">
                    <li className="flex items-center">
                        <span className="mr-1">Online Status:</span>
                        <span className={`text-xl ${onlineStatus ? 'text-green-500' : 'text-red-500'}`}>
                            {onlineStatus ? '🟢' : '🔴'}
                        </span>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-blue-500 transition-colors duration-200">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-500 transition-colors duration-200">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-500 transition-colors duration-200">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/grocery" className="hover:text-blue-500 transition-colors duration-200">
                            Grocery
                        </Link>
                    </li>
                    <li className="hover:text-blue-500 transition-colors duration-200">Cart</li>
                    <li>
                        <button
                            onClick={() => {
                                setButtonName((prev) => (prev === 'Login' ? 'Logout' : 'Login'));
                            }}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            {buttonName}
                        </button>
                    </li>
                    <li className='font-bold'>
                        {loggedInUser}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
