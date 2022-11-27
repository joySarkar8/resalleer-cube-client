import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AddProduct from "../pages/Dashbaord/AddProduct";
import AllSellers from "../pages/Dashbaord/AllSellers";
import LeftSideNav from "../pages/Dashbaord/LeftSideNav";
import MyOrders from "../pages/Dashbaord/MyOrders";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/shared/ErrorPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path: '/dashboard',
                        element: <MyOrders></MyOrders>,
                    },
                    {
                        path: '/dashboard/my-orders',
                        element: <MyOrders></MyOrders>,
                    },
                    {
                        path: '/dashboard/all-sellers',
                        element: <AllSellers></AllSellers>
                    },
                    {
                        path: '/dashboard/add-product',
                        element: <AddProduct></AddProduct>,
                    },
                ]
            },
        ]
    }
]);

export default router;