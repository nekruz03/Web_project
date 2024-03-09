import { createBrowserRouter } from 'react-router-dom';
import { Landing } from '../view/pages/Landing';
import { Catalog } from '../view/pages/Catalog';
import { ProductDetails } from '../view/pages/ProductDetails';
import { Cart } from '../view/pages/Cart';
import { ResultOfSearch } from '../view/pages/SearchResult';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: '/catalog',
        element: <Catalog />,
    },
    {
        path: '/catalog/*',
        element: <ProductDetails />,
    },
    {
        path: '/cart',
        element: <Cart />,
    },

    {
        path: '/search/*',
        element: <ResultOfSearch />,
    },
]);
