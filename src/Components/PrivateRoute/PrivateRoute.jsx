import { useContext } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/Authprovider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);

    // use the location for the go to the desire location after login

    const location = useLocation();


    if (loading) {
        // Spinner for the loading state
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
            </div>
        );
    }
    if (!user) {
        return <Navigate state={{ from: location.pathname }} to='/login' ></Navigate>
    }
    return children
};

export default PrivateRoute;

