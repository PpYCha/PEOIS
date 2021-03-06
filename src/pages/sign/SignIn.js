import React, { useState, useContext, useEffect } from "react";
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
import Copyright from "../../components/Copyright";
import { Paper } from "@mui/material";

import Image from "../../assets/img/loginImage.jpg";
import FormInput from "../../components/FormInput";
import Swal from "sweetalert2";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
};

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

  const [msg, setMsg] = useState({
    status: "",
    message: "",
    error: "",
    success: "",
  });

  const [validation_error, setValidation_error] = useState("");

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    onSignInHandler();
  };

  const onSignInHandler = () => {
    axios
      .post("http://localhost:8000/api/user-signin", {
        email: user.email,
        password: user.password,
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
          setMsg({
            message: response.data.message,
          });

          console.log("Wrong Password:", response.data);
          Swal.fire({
            title: "Fail",
            text: response.data.message,
            icon: "error",
            confirmButtonText: "OK!",
          }).then((result) => {
            if (result.isConfirmed) {
            }
          });
        }

        //No Emaill || No Password
        if (
          response.data.status === "failed" &&
          typeof response.data.validation_error !== "undefined"
        ) {
          setMsg({
            error: response.data.validation_error,
          });
          console.log(msg.error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const inputs = [
    {
      id: "email",
      label: "Email Address",
      name: "email",
      pattern: "^[A-Za-z0-9]{3,16}$",
      xs: 12,
      type: "email",
      helperText: typeof msg.error === "undefined" ? false : msg.error.email,
      required: true,
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      xs: 12,
      helperText: typeof msg.error === "undefined" ? false : msg.error.password,

      required: true,
    },
  ];

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper elevation={6}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          p={2}
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
            <Grid container spacing={2}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={user[input.name]}
                  onChange={onChange}
                />
              ))}
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link component={RouterLink} to="/user-signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
      <Copyright />
    </Container>
  );
}
