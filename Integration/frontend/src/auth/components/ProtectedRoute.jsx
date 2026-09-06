import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {

    const { user, loading } = useSelector(
        (state) => state.auth
    );

    // Authentication check is still happening
    if (loading) {
        return <div>Loading...</div>;
    }

    // User is not logged in
    if (!user) {
        return <Navigate to="/" replace />;
    }

    // User is logged in
    return <Outlet />;
};

export default ProtectedRoute;