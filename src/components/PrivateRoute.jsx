import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "./Layout";

const PrivateRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
      <Layout>
        <Outlet />
      </Layout>
  );
};

export default PrivateRoute;
