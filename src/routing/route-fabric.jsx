import React from 'react';

import { Switch } from 'react-router-dom';
import RouteBuilder from './route-builder';
import PrivateRouteBuilder from './route-builder-private';

import App from '../components/app';
import Authentication from '../components/authentication';

const routes = [
  {
    path: '/login',
    component: Authentication,
  },
];

const privateRoutes = [
  {
    path: '/',
    component: App,
  },
];

export default function RouteFabric() {
  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <RouteBuilder key={path} path={path} component={component} />
      ))}
      {privateRoutes.map(({ path, component }) => (
        <PrivateRouteBuilder key={path} path={path} component={component} />
      ))}
    </Switch>
  );
}
