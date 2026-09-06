

import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const PublicRoute = () => {

    const { user, loading } = useSelector(
        (state) => state.auth
    );

    // console.log("USER:", user);

    // Authentication check is still happening
    if (loading) {
        return <div>Loading...</div>;
    }

    // User already logged in
    if (user) {
        return <Navigate to="/home" replace />;
    }

    // User is not logged in
    return <Outlet />;
};

export default PublicRoute;

