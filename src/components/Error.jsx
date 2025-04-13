import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
            <h1 className="text-5xl font-bold text-red-600 mb-4">Oops! Page Not Found</h1>
            <p className="text-gray-700 text-lg mb-2">Something went wrong...</p>
            <p className="text-gray-500 mb-6 text-sm">
                {err.status} : {err.statusText}
            </p>
            <Link
                to="/"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default Error;
