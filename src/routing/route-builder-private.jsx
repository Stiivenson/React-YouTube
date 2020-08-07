import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

const PrivateRoute = ({ Component, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated === true ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
};

export default function PrivateRouteBuilder(route) {
  return <PrivateRoute path={route.path} Component={route.component} />;
}
