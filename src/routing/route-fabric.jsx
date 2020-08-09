import React from 'react';

import { Switch } from 'react-router-dom';
import RouteBuilder from './route-builder';
import PrivateRouteBuilder from './route-builder-private';

import App from '../components/app';
import Favorites from '../components/favorites';
import Authentication from '../components/authentication';
import Navbar from '../components/navbar';

const routes = [
  {
    path: '/login',
    component: Authentication,
  },
];

const privateRoutes = [
  {
    path: '/favorites',
    component: Favorites,
  },
  {
    path: '/',
    component: App,
  },
];

export default function RouteFabric() {
  return (
    <>
      <Navbar />
      <Switch>
        {routes.map(({ path, component }) => (
          <RouteBuilder key={path} path={path} component={component} />
        ))}
        {privateRoutes.map(({ path, component }) => (
          <PrivateRouteBuilder key={path} path={path} component={component} />
        ))}
      </Switch>
    </>
  );
}
