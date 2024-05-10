import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ContactUs from "../pages/ContactUs";
import AddService from "../pages/Dashboard/AddService";
import BookedService from "../pages/Dashboard/BookedService";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageService from "../pages/Dashboard/ManageService";
import ServiceToDo from "../pages/Dashboard/ServiceToDo";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Service from "../pages/Service";

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
                path: '/service',
                element: <Service></Service>
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
                element: <ManageService></ManageService>
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
            }


        ]
    }
])

export default router;