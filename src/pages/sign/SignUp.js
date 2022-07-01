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
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import InputLabel from "@mui/material/InputLabel";
import Swal from "sweetalert2";

import FormInput from "../../components/FormInput";
import { postSignUp } from "../../api/sign";
import FormControlSelect from "../../components/FormControlSelect";

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
        REFACTOR
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
  const [values, setValues] = useState({
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

  const handleChangeOffice = (e) => {
    setOffice(e.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  async function postData() {
    const res = postSignUp({ gender, office, values })
      .then(function (response) {
        console.log(response.data);
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
        }
        if (response.data.status === "failed") {
          setMsg({
            message: response.data.message,
            error: response.data.errors,
          });
        }
        if (
          response.data.status === "failed" &&
          response.data.success === false
        ) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: msg.message,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const inputs = [
    {
      id: "name",
      name: "name",
      label: "Name",
      helperText: typeof msg.error === "undefined" ? false : msg.error.name,

      xs: 6,
      required: true,
    },
    {
      id: "email",
      label: "Email Address",
      name: "email",
      pattern: "^[A-Za-z0-9]{3,16}$",
      xs: 6,
      type: "email",
      helperText: typeof msg.error === "undefined" ? false : msg.error.email,

      required: true,
    },
    {
      id: "username",
      label: "Username",
      name: "username",
      helperText: typeof msg.error === "undefined" ? false : msg.error.username,

      xs: 12,

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
    {
      name: "address",
      label: "Address",
      id: "address",
      autoComplete: "adress",
      xs: 12,

      helperText: typeof msg.error === "undefined" ? false : msg.error.address,
    },
    {
      name: "phone",
      label: "Contact #",
      id: "phone",
      helperText: typeof msg.error === "undefined" ? false : msg.error.phone,

      xs: 6,
    },
  ];

  const officeMenuItem = [
    {
      id: 1,
      value: "Provincial Engineering Office",
      label: "Provincial Engineering Office",
    },
    {
      id: 2,
      value: "Provincial Planning Development Office",
      label: "Provincial Planning Development Office",
    },
  ];

  const genderMenuItem = [
    {
      id: 1,
      value: "Male",
      label: "Male",
    },
    {
      id: 2,
      value: "Female",
      label: "Female",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    postData();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}

              <Grid item xs={12} sm={6}>
                <FormControlSelect
                  idLabel="genderlabel"
                  inputLabel="Gender"
                  labelId="genderlabel"
                  idSelect="gender"
                  value={gender}
                  label="Gender"
                  onChange={handleChangeGender}
                  menuItem={genderMenuItem}
                  formHelperText={
                    typeof msg.error === "undefined" ? false : msg.error.gender
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlSelect
                  idLabel="office-label"
                  inputLabel="Office"
                  labelId="office-label"
                  idSelect="office-select"
                  value={office}
                  label="Office"
                  onChange={handleChangeOffice}
                  menuItem={officeMenuItem}
                  formHelperText={
                    typeof msg.error === "undefined" ? false : msg.error.office
                  }
                />
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
