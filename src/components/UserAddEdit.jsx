import axios from "axios";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import CustomTextField from "./CustomTextField";
import { useNavigate, useParams } from "react-router-dom";

const UserNew = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [office, setOffice] = useState("");
  const [loading, setLoading] = useState(true);

  const [msg, setMsg] = useState({
    status: "",
    message: "",
    error: "",
    success: "",
  });

  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("hellow user", userId);

    if (userId) {
      fetchDataUser();
    }
  }, []);

  const fetchDataUser = async () => {
    setLoading(true);
    const res = await axios.get(
      `http://localhost:8000/api/edit-user/${userId}`
    );

    if (res.data.status === 200) {
      setName(res.data.user.name);
      setEmail(res.data.user.email);
      setUsername(res.data.user.username);
      // setPassword(res.data.password);
      setPhone(res.data.user.phone);
      setAddress(res.data.user.address);
      setGender(res.data.user.gender);
      setOffice(res.data.user.office);
    }
    setLoading(false);
  };

  const handleSave = () => {
    !userId ? postData() : updateData();
  };

  async function postData() {
    const res = axios
      .post("http://localhost:8000/api/user-signup", {
        name: name,
        email: email,
        username: username,
        password: password,
        address: address,
        phone: phone,
        gender: gender,
        office: office.officeName,
        is_active: true,
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
          });
          navigate("/users");
          console.log(msg);
        }
        if (response.data.status === "failed") {
          setMsg((state) => {
            return {
              message: response.data.message,
              errors: response.data.errors,
            };
          });

          console.log(msg);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function updateData() {
    const res = axios
      .put(`http://localhost:8000/api/update-user/${userId}`, {
        name: name,
        email: email,
        username: username,
        password: password,
        address: address,
        phone: phone,
        gender: gender,
        office: office.officeName,
        is_active: true,
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
          });
          navigate("/users");
          console.log(msg);
        }
        if (response.data.status === "failed") {
          setMsg((state) => {
            return {
              message: response.data.message,
              errors: response.data.errors,
            };
          });

          console.log(msg);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Box flex={6} p={2}>
      <Paper elevation={3}>
        <Stack direction="row" spacing={2} p={3} justifyContent="space-between">
          <Typography variant="h5">User Information</Typography>

          <Button variant="contained" color="success" onClick={handleSave}>
            SAVE
          </Button>
        </Stack>

        <Box m={3} pb={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="email"
                label="Email Address"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="username"
                label="Username"
                name="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="name"
                label="Name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="phone"
                label="Phone"
                name="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="address"
                label="Address"
                name="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                value={address}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={officeDepartment}
                getOptionLabel={(option) => option.officeName}
                fullWidth
                onChange={(event, newValue) => {
                  setOffice(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Select Office" />
                )}
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default UserNew;

const officeDepartment = [
  {
    officeName: "Provincial Engineering Office",
    officeAbbrv: "PEO",
  },
  {
    officeName: "Provincial Planning Development Office",
    officeAbbrv: "PPDO",
  },
];
