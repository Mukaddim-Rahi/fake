import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import authService from '../../services/authService';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
function Signup({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSignup = async () => {
    
    // navigate('/dashboard')
    // history.push('/dashboard');
    try {
      // Basic client-side input validation
      if (!email || !password || !confirmPassword) {
        // Handle validation error (e.g., display a message)
        return;
      }

      if (password !== confirmPassword) {
        // Handle password mismatch error
        // const variant = "danger"
        <Alert key="danger" variant="danger">
          password did not match
        </Alert>
        return;
      }

      const response = await authService.signup(email, password);
      // Store the token in localStorage or state
      // Redirect to the Dashboard or any other route
      // history.push('/dashboard');
      navigate('/dashboard')
    } catch (error) {
      // Handle signup error (e.g., display an error message)
      console.log("Error: " + error)
    }
  };

  return (
    <div className='login-container'>


      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="login-form">
              <h2>Sign Up</h2>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="success" 
                onClick={handleSignup}
                className="login-button">
                  Sign Up
                </Button>
              </Form>
            </div>
          </Col>

        </Row>
      </Container >
    </div>
  );
}

export default Signup;
