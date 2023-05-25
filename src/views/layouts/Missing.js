import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router";

const Missing = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        navigate(from, { replace: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const mystyle = {
        margin : "50px 50px 50px 50px"
      };
    return (
        <React.Fragment>
            <Link to="/" style={mystyle}>
                404
            </Link>
        </React.Fragment>
    )
}

export default Missing;