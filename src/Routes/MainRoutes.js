import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import AddProduct from "../pages/Dashbaord/AddProduct";
import AllBuyers from "../pages/Dashbaord/AllBuyers";
import AllSellers from "../pages/Dashbaord/AllSellers";
import MyOrders from "../pages/Dashbaord/MyOrders";
import MyProducts from "../pages/Dashbaord/MyProducts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Products from "../pages/Products/Products";
import Register from "../pages/Register";
import ErrorPage from "../pages/shared/ErrorPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";



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
                element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
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
                        element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
                    },
                    {
                        path: '/dashboard/all-buyers',
                        element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
                    },
                    {
                        path: '/dashboard/add-product',
                        element: <SellerRoute><AddProduct></AddProduct></SellerRoute>,
                    },
                    {
                        path: '/dashboard/my-products',
                        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
                    },
                ]
            },
            {
                path: 'products/:categoryName',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                // loader: ({params}) => fetch(`http://localhost:5000/products/${params.categoryName}`),
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: ({params}) => fetch(`http://localhost:5000/blog`)
            }
        ]
    }
]);

export default router;