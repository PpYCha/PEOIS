import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomTextField from "./CustomTextField";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProjectAddEdit = () => {
  const [aip_reference_code, setAip_reference_code] = useState("");
  const [project_status, setProject_status] = useState("Not Funded");
  const [project_name, setProject_name] = useState("");
  const [location, setLocation] = useState("");
  const [barangay, setBarangay] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [province, setProvince] = useState("N. Samar");
  const [implementing_office, setImplementing_office] = useState("");
  const [starting_date, setStarting_date] = useState("");
  const [completion_date, setCompletion_date] = useState("");
  const [expected_output, setExpected_output] = useState("");
  const [funding_source, setFunding_source] = useState("External Sources");
  const [personal_services, setPersonal_services] = useState("");
  const [mooe, setMooe] = useState("");
  const [capital_outlay, setCapital_outlay] = useState("");
  const [total, setTotal] = useState("");
  const [cca, setCca] = useState("");
  const [ccm, setCcm] = useState("");
  const [cc_typology_code, setCc_typology_code] = useState("");
  const [alignment, setAlignment] = useState("Funded");

  const [loading, setLoading] = useState(true);
  console.log("line:40", project_status);
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (projectId) {
      fetchProjectData();
    }
  }, []);

  const fetchProjectData = async () => {
    setLoading(true);
    const res = await axios.get(
      `http://localhost:8000/api/edit-project/${projectId}`
    );

    if (res.data.status === 200) {
      setProject_status(res.data.project.project_status);
      setAip_reference_code(res.data.project.aip_reference_code);
      setProject_name(res.data.project.project_name);
      setLocation(res.data.project.location);
      setBarangay(res.data.project.barangay);
      setMunicipality(res.data.project.municipality);
      setImplementing_office(res.data.project.implementing_office);
      setStarting_date(res.data.project.starting_date);
      setCompletion_date(res.data.project.completion_date);
      setExpected_output(res.data.project.expected_output);
      setFunding_source(res.data.project.funding_source);
      setCapital_outlay(res.data.project.capital_outlay);
      setTotal(res.data.project.total);

      // setCca(res.data.project.cca);
      // setMooe(res.data.project.mooe);
      // setPersonal_services(res.data.project.personal_services);
      // setCcm(res.data.project.ccm);
      // setCc_typology_code(res.data.project.cc_typology_code);
    }
    setLoading(false);
  };

  const handleSave = () => {
    !projectId ? postProjectData() : putProjectData();
  };

  const postProjectData = async () => {
    const res = axios
      .post("http://localhost:8000/api/add-project", {
        aip_reference_code: aip_reference_code,
        project_status: project_status,
        project_name: project_name,
        location: location,
        barangay: barangay,
        province: province,
        municipality: municipality,
        implementing_office: implementing_office,
        starting_date: starting_date,
        completion_date: completion_date,
        expected_output: expected_output,
        funding_source: funding_source,
        personal_services: personal_services,
        mooe: mooe,
        capital_outlay: capital_outlay,
        total: total,
        cca: cca,
        ccm: ccm,
        cc_typology_code: cc_typology_code,
      })
      .then(function (response) {
        // console.log("then:", response.data.message);
        if (response.data.status === 200) {
          console.log(response.data.message);
          Swal.fire({
            title: "Success",
            text: "Save successfully",
            icon: "success",
            confirmButtonText: "OK!",
          });
          navigate("/projects");
        }
      })
      .catch(function (error) {
        // console.log(error.response.data);
        console.log("catch:", error);
      });
  };

  const putProjectData = async () => {
    const res = axios
      .put(`http://localhost:8000/api/update-project/${projectId}`, {
        aip_reference_code: aip_reference_code,
        project_status: project_status,
        project_name: project_name,
        location: location,
        barangay: barangay,
        municipality: municipality,
        province: province,
        implementing_office: implementing_office,
        starting_date: starting_date,
        completion_date: completion_date,
        expected_output: expected_output,
        funding_source: funding_source,
        personal_services: personal_services,
        mooe: mooe,
        capital_outlay: capital_outlay,
        total: total,
        cca: cca,
        ccm: ccm,
        cc_typology_code: cc_typology_code,
      })
      .then(function (response) {
        if (response.data.status === 200) {
          // console.log(res.data.message)
          Swal.fire({
            title: "Success",
            text: "Save successfully",
            icon: "success",
            confirmButtonText: "OK!",
          });
          navigate("/projects");
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  return (
    <Box flex={6} p={2}>
      <Paper elevation={3}>
        <Stack direction="row" spacing={2} p={3} justifyContent="space-between">
          <Typography variant="h5">Project Information</Typography>

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
                id="aip_reference_code"
                label="AIP Reference Code"
                name="aip_reference_code"
                onChange={(e) => {
                  setAip_reference_code(e.target.value);
                }}
                value={aip_reference_code}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="project_name"
                label="Project Title"
                name="project_name"
                onChange={(e) => {
                  setProject_name(e.target.value);
                }}
                value={project_name}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="location"
                label="Location"
                name="location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                value={location}
              />
            </Grid> */}
            <Grid item xs={12} sm={4}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="barangay"
                label="Barangay"
                name="barangay"
                onChange={(e) => {
                  setBarangay(e.target.value);
                }}
                value={barangay}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="municipality"
                label="Municipality"
                name="municipality"
                onChange={(e) => {
                  setMunicipality(e.target.value);
                }}
                value={municipality}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="province"
                label="Province"
                name="province"
                onChange={(e) => {
                  setProvince(e.target.value);
                }}
                value={province}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="implementing_office"
                label="Implementing Office"
                name="implementing_office"
                onChange={(e) => {
                  setImplementing_office(e.target.value);
                }}
                value={implementing_office}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="expected_output"
                label="Expected Output"
                name="expected_output"
                onChange={(e) => {
                  setExpected_output(e.target.value);
                }}
                value={expected_output}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="funding_source"
                label="Funding Source"
                name="funding_source"
                onChange={(e) => {
                  setFunding_source(e.target.value);
                }}
                value={funding_source}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="personal_services"
                label="Personal Services"
                name="personal_services"
                onChange={(e) => {
                  setPersonal_services(e.target.value);
                }}
                value={personal_services}
              />
            </Grid> */}
            {/* <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="mooe"
                label="MOOE"
                name="mooe"
                onChange={(e) => {
                  setMooe(e.target.value);
                }}
                value={mooe}
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="capital_outlay"
                label="Capital Outlay"
                name="capital_outlay"
                onChange={(e) => {
                  setCapital_outlay(e.target.value);
                  setTotal(e.target.value);
                }}
                value={capital_outlay}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="total"
                label="Total"
                name="total"
                onChange={(e) => {
                  setTotal(e.target.value);
                }}
                value={total}
              />
            </Grid>
            {/* <Grid item xs={12} sm={4}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="cca"
                label="CCA"
                name="cca"
                onChange={(e) => {
                  setCca(e.target.value);
                }}
                value={cca}
              />
            </Grid> */}
            {/* <Grid item xs={12} sm={4}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="ccm"
                label="CCM"
                name="ccm"
                onChange={(e) => {
                  setCcm(e.target.value);
                }}
                value={ccm}
              />
            </Grid> */}
            {/* <Grid item xs={12} sm={4}>
              <CustomTextField
                required
                fullWidth
                type="text"
                id="cc_typology_code"
                label="CC Typology Code"
                name="cc_typology_code"
                onChange={(e) => {
                  setCc_typology_code(e.target.value);
                }}
                value={cc_typology_code}
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="starting_date"
                label="Starting Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={starting_date}
                onChange={(e) => {
                  setStarting_date(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="completion_date"
                label="Completion Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={completion_date}
                onChange={(e) => {
                  setCompletion_date(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <FormControlLabel
                checked={project_status}
                control={<Checkbox />}
                label="Check if Funded"
                // labelPlacement="Check if Funded"
                onChange={(e) => {
                  setProject_status(e.target.checked);
                }}
              /> */}

              <ToggleButtonGroup
                color="primary"
                value={project_status}
                exclusive
                onChange={(e) => {
                  setProject_status(e.target.value);
                }}
              >
                <ToggleButton value="Funded">Funded</ToggleButton>
                <ToggleButton value="Not Funded">Not Funded</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProjectAddEdit;
