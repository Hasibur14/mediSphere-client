import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ServiceUpdate from "../components/ServiceUpdate";
import AllService from "../pages/AllService";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import BookServiceAdd from "../pages/BookServiceAdd";
import ContactUs from "../pages/ContactUs";
import AddService from "../pages/Dashboard/AddService";
import BookedService from "../pages/Dashboard/BookedService";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageService from "../pages/Dashboard/ManageService";
import ServiceToDo from "../pages/Dashboard/ServiceToDo";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import SingleService from "../pages/SingleService";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allService',
                element: <AllService></AllService>
            },
            {
                path: '/services/:id',
                element: <PrivetRoute> <SingleService></SingleService></PrivetRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`)
            },
            {
                path: '/service/:id',
                element: <BookServiceAdd></BookServiceAdd>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/manageService',
                element: <PrivetRoute><ManageService></ManageService></PrivetRoute>
            },
            {
                path: '/bookedService',
                element: <BookedService></BookedService>
            },
            {
                path: '/serviceToDo',
                element: <ServiceToDo></ServiceToDo>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
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
                path: '/serviceUpdate/:id',
                element: <ServiceUpdate></ServiceUpdate>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/serviceUpdate/${params.id}`)
            }

        ]
    }
])

export default router;