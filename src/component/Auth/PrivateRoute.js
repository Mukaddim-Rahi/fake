// components/Auth/PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'; // You can use Bootstrap Spinner for loading
import './PrivateRoute.css'
function PrivateRoute({ component: Component, isAuthenticated, isLoading, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
