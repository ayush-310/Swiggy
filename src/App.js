import './app.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
import { lazy, Suspense, useEffect, useState } from 'react';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';



// Chunking 
//Dynamic Bundling
// Lazy Loading
// Code Splitting - refers to splits the code in different chunks and loads them on demand.
// React.lazy
// React.lazy is a function that enables you to render a dynamic import as a regular component.
// Dynamic Import

const Grocery = lazy(() => import('./components/Grocery'));

// Main App Component
const App = () => {

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const data = {
      name: "Ayush Srivastava",
    };
    setUserInfo(data.name);
  }, []);

  return (

    <UserContext.Provider value={{ loggedInUser: userInfo }}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>

  );
};

// Define Routes
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<Shimmer />}> <Grocery /> </Suspense>
      },
    ],
    errorElement: <Error />
  },

]);

// Root Component for Router
const Root = () => {
  return <RouterProvider router={appRouter} />;
};

export default Root;
