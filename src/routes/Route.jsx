import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
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
                path: '/contact',
                element: <ContactUs></ContactUs>
            },

        ]
    }
])

export default router;