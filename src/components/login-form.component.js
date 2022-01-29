import {useState} from "react";
import Input from "./common/input.component";
import {Form, Formik, Field, ErrorMessage} from 'formik'
import loginSchema from "./schema/login.schema";

const LoginForm = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="offset-3 col-6">
                    <h1>Login</h1>

                    <Formik
                        initialValues={{email: '', password: ''}}
                        validationSchema={loginSchema}
                        onSubmit={(value, actions) => {
                            console.log(value)
                            actions.setSubmitting(false)
                        }}
                    >
                        {formikProps => (
                            <Form onSubmit={formikProps.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <Field type="text" id="email" name="email" className='form-control'/>
                                    <div className='invalid-feedback d-block'><ErrorMessage name="email"/></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <Field type="password" id="password" name="password" className='form-control'/>
                                    <div className='invalid-feedback d-block'><ErrorMessage name="password"/></div>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default LoginForm