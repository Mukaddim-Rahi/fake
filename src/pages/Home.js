// pages/Home.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Home.css'; // Import custom styles

function Home() {
  return (
    <Container>
      <div className="home-container">
        <h1 className="home-title">Welcome to Your Fake Detection Website</h1>
        <p className="home-description">
          This is a simplified example of a fake detection website. You can customize it to fit your project's needs.
        </p>
        <div className="home-button-container">
          <Button variant="primary" href="/login">
            Login
          </Button>{' '}
          <Button variant="secondary" href="/signup">
            Signup
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Home;
