import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { DASHBOARD } from '../constants/routes';

const PublicRoute = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to={DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
