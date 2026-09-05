
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";


export let router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }

])




