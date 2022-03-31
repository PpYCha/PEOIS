import "./newProject.css";
// import DateAdapter from "@mui/lab/AdapterDateFns";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

export default function NewProject() {
  const inputRef = useRef();
  const [project, setProject] = useState({
    aip_reference_code: "",
    project_name: "",
    location: "",
    implementing_office: "",
    starting_date: "",
    completion_date: "",
    expected_output: "",
    funding_source: "",
    personal_services: "",
    mooe: "",
    capital_outlay: "",
    total: "",
    cca: "",
    ccm: "",
    cc_typology_code: "",
  });

  const handleInput = (e) => {
    setProject({
      ...project,
      [e.target.id]: e.target.value,
    });
  };

  const saveProject = async (e) => {
    e.preventDefault();

    console.log(project);

    // const res = await axios
    //   .post("http://localhost:8000/api/add-project", project)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //   });
    const res = axios
      .post("http://localhost:8000/api/add-project", project)
      .then(function (response) {
        if (response.data.status === 200) {
          // console.log(res.data.message)
          Swal.fire({
            title: "Success",
            text: "Save successfully",
            icon: "success",
            confirmButtonText: "OK!",
          });
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };
  return (
    <div className="newProject">
      <h1 className="addProjectTitle">New Project</h1>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={saveProject}
      >
        <Grid container>
          <TextField
            id="aip_reference_code"
            label="AIP Reference Code"
            type="text"
            style={{ width: "300px", margin: "10px" }}
            onChange={handleInput}
            value={project.aip_reference_code}
          />
          <br />
          <TextField
            id="project_name"
            label="Project Title"
            type="text"
            style={{ width: "300px", margin: "10px" }}
            onChange={handleInput}
            value={project.project_name}
          />
          <br />
          <TextField
            id="location"
            label="Location"
            type="text"
            style={{ width: "300px", margin: "10px" }}
            onChange={handleInput}
            value={project.location}
          />
          <br />
          <TextField
            id="implementing_office"
            label="Implementing Office"
            type="text"
            style={{ width: "300px", margin: "10px" }}
            onChange={handleInput}
            value={project.implementing_office}
          />
          <br />
          <TextField
            id="expected_output"
            label="Expected Output"
            type="text"
            style={{ width: "300px", margin: "10px" }}
            onChange={handleInput}
            value={project.expected_output}
          />
          <br />
          <TextField
            id="funding_source"
            label="Funding Source"
            type="text"
            style={{ width: "300px", margin: "10px" }}
            onChange={handleInput}
            value={project.funding_source}
          />
          <br />
          <TextField
            id="personal_services"
            label="Personal Services"
            type="text"
            style={{ width: "300px", margin: "10px" }}
            onChange={handleInput}
            value={project.personal_services}
          />
          <br />
          <TextField
            id="mooe"
            label="MOOE"
            type="text"
            style={{ width: "300px", margin: "10px" }}
            onChange={handleInput}
            value={project.mooe}
          />
          <br />
          <TextField
            id="capital_outlay"
            label="Capital Outlay"
            type="text"
            style={{ width: "300px", margin: "10px" }}
            onChange={handleInput}
            value={project.capital_outlay}
          />
          <br />
          <TextField
            id="total"
            label="Total"
            type="text"
            style={{ width: "300px", margin: "10px" }}
            onChange={handleInput}
            value={project.total}
          />
          <br />
          <TextField
            id="cca"
            label="CCA"
            type="text"
            style={{ width: "300px", margin: "10px" }}
            onChange={handleInput}
            value={project.cca}
          />
          <br />
          <TextField
            id="ccm"
            label="CCM"
            type="text"
            style={{ width: "300px", margin: "10px" }}
            onChange={handleInput}
            value={project.ccm}
          />
          <br />
          <TextField
            id="cc_typology_code"
            label="CC Typology Code"
            type="text"
            style={{ width: "300px", margin: "10px" }}
            onChange={handleInput}
            value={project.cc_typology_code}
          />
          <br />

          <TextField
            id="starting_date"
            label="Starting Date"
            type="date"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            value={project.starting_date}
            onChange={handleInput}
            style={{ width: "300px", margin: "10px" }}
          />

          <TextField
            id="completion_date"
            label="Completion Date"
            type="date"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            value={project.completion_date}
            onChange={handleInput}
            style={{ width: "300px", margin: "10px" }}
          />

          <br />
        </Grid>
        <br />
        <br />
        <Button
          variant="contained"
          style={{ maxWidth: "300px", width: "300px" }}
          type="submit"
        >
          Create
        </Button>
      </Box>
    </div>
  );
}
