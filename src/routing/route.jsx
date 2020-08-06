import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import RouteFabric from './route-fabric';

// import Navbar from '../components/navbar';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <RouteFabric />
    </BrowserRouter>
  );
};

export default AppRouter;
