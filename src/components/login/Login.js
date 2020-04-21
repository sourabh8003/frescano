import React from 'react'; 
import { Formik } from 'formik';
import * as Yup from 'yup';
import deepEqual from 'lodash/isEqual';
import { Form, Col, Button } from 'react-bootstrap';
import './Login.scss';

const loginSchema = Yup.object({
    firstName: Yup.string()
        .required('First name is required')
        .matches(/[a-zA-Z]/, 'First name only contain characters from a to z'),
    lastName: Yup.string()
        .required('Last name is required')
        .matches(/[a-zA-Z]/, 'Last name contain characters from a to z'),
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required') 
        .min(8, 'Password should be 8 chars minimum')
        .matches(/^[a-zA-Z0-9_.-]*$/, 'Password only contain letters & numbers.')
});

const Login = () => {
    return (
        <Formik validationSchema={loginSchema}
            initialValues={{ firstName: '', lastName: '', email: '', password: ''}}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);
                setTimeout(() => {
                    resetForm();
                    setSubmitting(false);
                }, 3000);
            }} >
                {({ initialValues, errors, handleSubmit, isSubmitting , touched, handleChange, handleBlur, values }) => (
                    <Form onSubmit={handleSubmit} className="login-form">
                        <div className="form-header">
                            <span>Get Started Today!</span>
                        </div>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                />
                                <div className="invalid-feedback">
                                    {errors.firstName && touched.firstName ? errors.firstName : '' }
                                </div>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                />
                                <div className="invalid-feedback">
                                    {errors.lastName && touched.lastName ? errors.lastName : ''}
                                </div>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <div className="invalid-feedback">
                                    {errors.email && touched.email ? errors.email : ''}
                                </div>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <div className="invalid-feedback">
                                    {errors.password && touched.password ? errors.password : ''}
                                </div>
                            </Form.Group>
                        </Form.Row>
                        <hr />
                        <div className="login-button-wrapper">
                            <Button 
                                variant="primary"
                                type="submit"
                                className="login-button"
                                disabled={!!deepEqual(values, initialValues) || Object.keys(errors).length > 0 || isSubmitting}
                            >
                                    Claim Your Free Trial
                            </Button>
                        </div>
                        You are agreeing to our <a href="/">Terms and services</a>
                    </Form>
                )}
        </Formik>
    )
};

export default Login;