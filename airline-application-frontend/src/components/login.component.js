import React, { Component } from "react";
import { Form,Button,Container,Row,Col } from "react-bootstrap";
export default class Login extends Component {
    render() {
        return (


                <Container>
                    <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Login</h1>
                    <Row>
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>

                    <Form.Control type="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                        </Col>
                    </Row>
                </Container>



                
        );
    }
}