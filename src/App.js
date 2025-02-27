import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import PickupScheduler from "./components/PickUpScheduling";
import VideoSharing from "./components/VideoShare";
import Dashboard from "./components/Dashboard";
import SignUpPage from "./components/SignUp";

const AppLayout = () =>{
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUpPage />
            },
            {
                path: "/pickUpScheduler",
                element: <PickupScheduler />
            },
            {
                path: "/videoSharing",
                element: <VideoSharing />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);