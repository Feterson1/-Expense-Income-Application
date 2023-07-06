import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "../pages/layout/layout";
import ErrorPage from "../pages/errorPage/error-page";
import HomePage from "../pages/home/home";
import TransactionsPage from "../pages/transactions/tranasctions";
import CategoriesPage from "../pages/categories/categories";
import AuthPage from "../pages/auth/auth";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPage/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'transactions',
                element:<TransactionsPage/>,
                
            },
            {
                path: 'categories',
                element: <CategoriesPage/>,
            },
            {
                path: 'auth',
                element: <AuthPage/>,
            }
        ]
    }
])