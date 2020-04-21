import React from 'react'; 
import { Form, Col, Button } from 'react-bootstrap';
import './Login.scss';

const Login = () => {
    return (
        <Form className="login-form">
            <div className="form-header">
                <span>Get Started Today!</span>
            </div>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <hr />
            <div className="login-button-wrapper">
                <Button variant="primary" type="submit" className="login-button">Claim Your Free Trial</Button>
            </div>
            You are agreeing to our <a href={'#'}>Terms and services</a>
        </Form>
    )
};

export default Login;