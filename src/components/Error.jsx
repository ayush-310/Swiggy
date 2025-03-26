import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="error-container">
            <h1 className="error-title">Oops! Page Not Found</h1>
            <p className="error-message">Something went wrong...</p>
            <p className="error-code">{err.status} : {err.statusText}</p>
            {/* <a href="/" className="error-button">Go Back Home</a> */}
        </div>
    );
};

export default Error;
