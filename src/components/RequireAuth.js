import { useLocation, Navigate, Outlet } from "react-router-dom";
import {getStorage} from "../helpers/localstorage";
import WrapperTest from "../components/WrapperTest";
import MainWrapper from "../containers/MainWrapper";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();

    return (
        getStorage('token')
            ? <MainWrapper pageName="Recommended" class='wrapper'><Outlet /></MainWrapper>
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;