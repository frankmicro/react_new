import { useLocation, Navigate, Outlet } from "react-router-dom";
import {getToken} from "../helpers/localstorage";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();

    return (
        getToken()
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;