import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
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
import { email, password } from "../../utils/validation-form";
import style from "./login.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const [error, loading] = useSelector(
    (state) => [state.auth.error, state.auth.loading],
    shallowEqual
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(login(data));
  };

  return (
    <Box className={style.login}>
      <Container maxWidth="xs">
        <Box className={style.login__wrapper}>
          <Typography variant="h5" component="h1" gutterBottom>
            Login
          </Typography>

          <form className={style.login__form} onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mb: 2 }}>
              <TextField
                label="Email"
                id="email"
                type="email"
                {...register("email", email)}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <TextField
                label="Password"
                id="password"
                type="password"
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

export default Login;
