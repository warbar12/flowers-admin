import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import * as routes from "../../constants/routes";
import style from "./notFound.module.scss";

const NotFound = ({ isAuthenticated }) => {
  const targetRoute = isAuthenticated ? routes.DASHBOARD : routes.LOGIN;

  return (
    <Container  className={style.notFound}>
      <Typography variant="h1" color="primary" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Box mt={3}>
        <NavLink to={targetRoute} style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Go to Home
          </Button>
        </NavLink>
      </Box>
    </Container>
  );
};

export default NotFound;
