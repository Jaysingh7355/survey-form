import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainRoutes from './MainRoutes'; // Import your route configuration

// Create the router using the routes defined in MainRoutes
const router = createBrowserRouter(MainRoutes);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;