// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { signUpSchema } from '../schemas';

const initialValues = {
  email : "",
  password : ""
};

const Basic = () => {
  
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit: (values) =>{
      console.log(values);
    }
  });
  return (
    <div>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
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
                            {errors.email && touched.email ? (<p>{errors.email}</p>) : null}
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
                            {errors.password && touched.password ? (<p>{errors.password}</p>) : null}
                        </div>
                        </div>
                        <button type='submit'>Submit</button>
                      </form>
                </div>
            </div>
    </div>
  );
}

export default Basic;