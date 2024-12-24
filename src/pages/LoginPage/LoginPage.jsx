import React from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/auth/asyncActions";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { REACT_ROUTER_NEW_DASHBOARD } from "../../constants/routes";
import { email, password } from "../../utils/validation-form";
import style from "./login.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [error, loading, token] = useSelector((state) => [
    state.auth.error,
    state.auth.loading,
    state.auth.token,
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(login(data));
  };

  if (token) {
    return <Navigate to={REACT_ROUTER_NEW_DASHBOARD} />;
  }

  // TODO: думаю лучше наctроить тему для MUI
  return (
    <Box className={style.login}>
      <Container maxWidth="xs">
        <Box className={style.login_wrapper}>
          <Typography variant="h5" component="h1" gutterBottom>
            Login
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                label="Email"
                id="email"
                type="email"
                variant="outlined"
                {...register("email", email)}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                label="Password"
                id="password"
                type="password"
                variant="outlined"
                {...register("password", password)}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error.message || "Неверный логин или пароль"}
              </Alert>
            )}

            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={loading}
              startIcon={
                loading && <CircularProgress size={20} color="inherit" />
              }
            >
              {loading ? "Loading..." : "Login"}
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
