import React, { useEffect, useState } from "react";
import { signUpUser, signInUser, productsGet } from "../../store/authReducer";
import { useDispatch, useSelector } from "react-redux";
import './index.css'
import { useNavigate, useLocation } from "react-router";
import {getToken} from "../../helpers/localstorage";

const AuthComponent = () => {
    const [getUser, setUser] = useState('SignIn')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const {error, success, loading} = useSelector(state=> {
        return state.user
    })
    const userToken = getToken();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (userToken) {
            navigate(from, { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userToken])

    const authenticate = () => {
        const payload = {email,password}
        if (getUser === 'SignIn') {
            dispatch(signInUser(payload))
        } else {
            dispatch(signUpUser(payload))
        }
    }
    const fetchMe = () => {
        dispatch(productsGet())
    }
    return (
        <div className="container-fluid h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <form>
                        <div>
                            <h3>{getUser}</h3>
                        </div>
                        {
                            loading ? <p className="text-primary">'Loading...'</p> : 
                            error ? <p className="text-danger">{error}</p> : 
                            <p className="text-success">{success}</p>
                        }
                        <div className="form-group">
                            <input _ngcontent-c0="" 
                            className="form-control form-control-lg" 
                            placeholder="User email" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            type="email"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control form-control-lg" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password"/>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-info" onClick={()=>authenticate()}>{getUser}</button>
                        </div>
                        <div>
                            {
                                getUser === 'SignIn' ? 
                                <p className="linkbutton" onClick={()=>setUser('SignUp')}>Don't have an account click here!</p>
                                :
                                <p className="linkbutton" onClick={()=>setUser('SignIn')}>Login if already have an account!</p>
                            }
                            <button type="button" className="btn btn-info" onClick={()=>fetchMe()}>Fetch</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthComponent