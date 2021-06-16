import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../auth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // if (auth.isAuthenticated()) {
        //   return <Component {...props} />;
        // } else {
        //   console.log('hi');
        //   return (
        //     <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        //   );
        // }
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
