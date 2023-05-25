import React, { useEffect, useState } from "react";
import { signUpUser, signInUser } from "../../store/authReducer";
import { useDispatch, useSelector } from "react-redux";
import './index.css'
import { useNavigate, useLocation } from "react-router";
import {getStorage, setStorage} from "../../helpers/localstorage";
import {externalPostCall, externalGetCall} from '../../helpers/api';
import toastService from "../../helpers/toastService";
import { useFormik } from 'formik';
import { signUpSchema } from "../../schemas";

const initialValues = {
    email : "ron4@gmail.com",
    password : "123456"
  };

const AuthComponent = () => {
    const {values, errors, touched, handleBlur, handleChange, handleSubmit, submitForm} = useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit: (values) =>{
            authenticate(values);
        }
      });

    const [getUser, setUser] = useState('SignIn')
    const [email, setEmail] = useState('ron4@gmail.com')
    const [password, setPassword] = useState('123456')
    const dispatch = useDispatch();
    const {error, success, loading} = useSelector(state=> {
        return state.user
    })
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        const userToken = getStorage('token');
        if (userToken) {
            navigate(from, { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const authenticate = (values) => {
        const payload = values;
        const signIn = externalPostCall('/v2/admin/login', payload);
        signIn.then((res) => {
            if (res.hasOwnProperty('response') && res['response']['success'] && res['response'].hasOwnProperty('data')) {
                setStorage('token',res['response'].data);
                toastService();
                navigate(from, { replace: true });
            } else {
                console.log("error");
            }
        }).catch(error => {
            console.log(error);
        });

        // if (getUser === 'SignIn') {
        //     dispatch(signInUser(payload))
        // } else {
        //     dispatch(signUpUser(payload))
        // }
    }
    return (
        <div className="container-fluid h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <form onSubmit={handleSubmit}>
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
                            autoComplete="off"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="email"/>
                            {errors.email && touched.email ? (<p className="text-danger">{errors.email}</p>) : null}
                        </div>
                        <div className="form-group">
                        <input className="form-control form-control-lg" 
                            placeholder="Password" 
                            name="password"
                            autoComplete="off"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"/>
                            {errors.password && touched.password ? (<p className="text-danger">{errors.password}</p>) : null}
                        </div>
                        <div className="form-group">
                            {/* <button type="button" className="btn btn-info" onClick={()=>authenticate()}>{getUser}</button> */}
                            <button type="button" className="btn btn-info" onClick={submitForm}>{getUser}</button>
                        </div>
                        <div>
                            {
                                getUser === 'SignIn' ? 
                                <p className="linkbutton" onClick={()=>setUser('SignUp')}>Don't have an account click here!</p>
                                :
                                <p className="linkbutton" onClick={()=>setUser('SignIn')}>Login if already have an account!</p>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthComponent