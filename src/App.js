import './app.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
import { lazy, Suspense } from 'react';
import Shimmer from './components/Shimmer';



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
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
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
        path: '/restaurants/:resId',
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
