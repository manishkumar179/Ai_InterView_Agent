import { createBrowserRouter } from "react-router";

import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";
import Home from "./auth/components/Home";

import ProtectedRoute from "./auth/components/ProtectedRoute";
import PublicRoute from "./auth/components/PublicRoute";


export const router = createBrowserRouter([

    // =========================
    // PUBLIC ROUTES
    // =========================

    {
        element: <PublicRoute />,
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },


    // =========================
    // PROTECTED ROUTES
    // =========================

    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/home",
                element: <Home />
            }
        ]
    }

]);