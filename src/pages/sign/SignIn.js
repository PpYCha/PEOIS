import React, { useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        PEOIS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    msg: "",
    isLoading: false,
    success: "",
    validation_error: "",
  });
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });

    onSignInHandler();
  };

  const onSignInHandler = () => {
    axios
      .post("http://localhost:8000/api/user-signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        //Correct Login
        if (response.data.status === 200) {
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userData", JSON.stringify(response.data.data));
          setUser({
            success: response.data.success,
            msg: response.data.message,
          });

          const user1 = response.data.data;
          console.log(user1);
          dispatch({ type: "LOGIN", payload: user1 });
          navigate("/");
        }
        //Wrong Password
        if (
          response.data.status === "failed" &&
          response.data.success === false
        ) {
          setUser({
            msg: response.data.message,
          });

          console.log(user);
        } else if (
          response.data.status === "failed" &&
          response.data.success === false
        ) {
          setUser({
            validation_error: response.data.validation_error,
          });
          console.log(user);
        }
        //else if (
        //     response.data.status === "failed" &&
        //     response.data.success === false
        //   ) {
        //     setUser({
        //       errMsg: response.data.message,
        //     });
        //     setTimeout(() => {
        //       setUser({ errMsg: "" });
        //     }, 2000);
        //   }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              // onChange={handleInput}
              onChange={(e) => setEmail(e.target.value)}
              // error={user.email === ""}
              // helperText={user.email === "" ? "Empty field!" : " "}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              // onChange={handleInput}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/user-signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
