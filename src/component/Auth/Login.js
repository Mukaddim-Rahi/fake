import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import './Login.css';
import authService from '../../services/authService';
function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigator = useNavigate();
  const handleLogin = async () => {
    // Add your authentication logic here
    // Example: make a request to your backend to validate the user's credentials

    try {
      const response = await authService.login(email, password);
      // history.push('/dashboard');
      navigator('/dashboard');
      
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    }

  };

  return (
    <div className="login-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="login-form">
              <h2>Login</h2>
              {error && <Alert variant="danger">{error}</Alert>}
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

                <Button
                  variant="primary"
                  onClick={handleLogin}
                  className="login-button"
                >
                  Login
                </Button>

                {/* Add a link to the signup page */}
                <p className="mt-3">
                  Don't have an account?{' '}
                  <Link to="/signup">Signup</Link>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
