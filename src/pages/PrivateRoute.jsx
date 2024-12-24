import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import { LOGIN } from '../constants/routes';

const PrivateRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to={LOGIN} replace />;
  }

  return (
      <Layout>
        <Outlet />
      </Layout>
  );
};

export default PrivateRoute;
