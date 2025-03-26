import './app.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

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
    ],
    errorElement: <Error />
  },

]);

// Root Component for Router
const Root = () => {
  return <RouterProvider router={appRouter} />;
};

export default Root;
