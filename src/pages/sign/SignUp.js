import React, { useState, useEffect } from "react";
import axios from "axios";
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
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Swal from "sweetalert2";
import { Alert } from "@mui/material";

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

export default function SignUp() {
  const navigate = useNavigate();
  const [office, setOffice] = useState("");
  const [gender, setGender] = useState("");
  const [msg, setMsg] = useState({
    status: "",
    message: "",
    error: "",
    success: "",
  });
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    address: "",
    phone: "",
    gender: gender,
    office: office,
    is_active: "false",
  });

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleChangeOffice = (e) => {
    setOffice(e.target.value);
    // handleNewUser();
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  // useEffect(() => {
  //   postData();
  // }, []);

  async function postData() {
    const res = axios
      .post("http://localhost:8000/api/user-signup", {
        name: user.name,
        email: user.email,
        username: user.username,
        password: user.password,
        address: user.address,
        phone: user.phone,
        gender: gender,
        office: office,
        is_active: user.is_active,
      })
      .then(function (response) {
        if (response.data.status === 200) {
          setMsg({
            message: response.data.message,
            error: response.data.errors,
            success: response.data.success,
          });
          Swal.fire({
            title: "Success",
            text: "Save successfully",
            icon: "success",
            confirmButtonText: "OK!",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/user-signin");
            }
          });
          console.log(msg);
        }
        if (response.data.status === "failed") {
          setMsg((state) => {
            return {
              message: response.data.message,
              errors: response.data.errors,
            };
          });

          // setTimeout(() => {
          //   setMsg("");
          // }, 2000);
          console.log(msg);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    postData();
    // console.log({
    //   name: user.name,
    //   email: user.email,
    //   username: user.username,
    //   password: user.password,
    //   address: user.address,
    //   phone: user.phone,
    //   gender: gender,
    //   office: office,
    //   is_active: user.is_active,
    //   msg: msg,
    // });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  // helperText={msg.message ? "" : "Name is required"}
                  // error={true}
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  onChange={handleInput}
                  value={user.name}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="address"
                  onChange={handleInput}
                  value={user.email}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  onChange={handleInput}
                  value={user.username}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleInput}
                  value={user.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  autoComplete="new-address"
                  onChange={handleInput}
                  value={user.address}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="phone"
                  label="Contact #"
                  type="phone #"
                  id="phone"
                  autoComplete="new-phone"
                  onChange={handleInput}
                  value={user.phone}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="genderlabel">Gender</InputLabel>
                  <Select
                    defaultValue=""
                    labelId="genderlabel"
                    id="gender"
                    value={gender}
                    label="Gender"
                    onChange={handleChangeGender}
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="office-label">Office</InputLabel>
                  <Select
                    defaultValue=""
                    labelId="office-label"
                    id="office-select"
                    value={office}
                    label="Office"
                    onChange={handleChangeOffice}
                  >
                    <MenuItem value={"Provincial Engineering Office"}>
                      Provincial Engineering Office
                    </MenuItem>
                    <MenuItem value={"Provincial Planning Development Office"}>
                      Provincial Planning Development Office
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/user-signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
