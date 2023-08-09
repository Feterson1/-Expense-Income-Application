import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "../pages/layout/layout";
import ErrorPage from "../pages/errorPage/error-page";
import HomePage from "../pages/home/home";

import CategoriesPage, { CategoriesAction, CategoriesLoader } from "../pages/categories/categories";
import AuthPage from "../pages/auth/auth";
import { ProtectedRouteComponent } from "../components/protected/ProtectedRoute";
import TransactionsPage, { TransactionAction, TransactionLoader } from "../pages/transactions/transactions";


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
                action: TransactionAction,
                loader: TransactionLoader,
                element:(
                <ProtectedRouteComponent>
                    <TransactionsPage/>
                </ProtectedRouteComponent>),
                
            },
            {
                path: 'categories',
                action: CategoriesAction,
                loader: CategoriesLoader,
                element: (
                <ProtectedRouteComponent>
                    <CategoriesPage/>
                </ProtectedRouteComponent>),
            },
            {
                path: 'auth',
                element: <AuthPage/>,
            }
        ]
    }
])