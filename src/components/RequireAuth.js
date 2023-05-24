import { useLocation, Navigate, Outlet } from "react-router-dom";
import {getToken} from "../helpers/localstorage";
import WrapperTest from "../components/WrapperTest";
import MainWrapper from "../containers/MainWrapper";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();

    return (
        getToken()
            ? <MainWrapper pageName="Recommended" class='wrapper'><Outlet /></MainWrapper>
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;