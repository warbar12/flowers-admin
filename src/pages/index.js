import React from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useSelector } from "react-redux";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Category from "./Category";
import NotFound from './NotFound/NotFound';
import * as routes from "../constants/routes";


const Pages = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.token);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
          <Route path={routes.LOGIN} element={<Login />} />
        </Route>

        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route index element={<Dashboard />} />
          <Route path={routes.CATEGORY} element={<Category />} />
        </Route>

        <Route path="*" element={<NotFound isAuthenticated={isAuthenticated}/>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Pages;
