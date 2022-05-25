import React from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import CustomTextField from "../../components/CustomTextField";

export default function NewInfrastructure() {
  const [infrastructure, setInfrastructure] = useState({
    name_of_project: "",
  });

  return (
    <div className="newProject">
      <h1 className="addProjectTitle">New Infrastructure</h1>
      <Box component="form" noValidate autoComplete="off" onSubmit={() => {}}>
        <Grid container>
          <CustomTextField
            id="name_of_project"
            label="Name of Project"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Location"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Date of Public Bidding"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Name of Contractor"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Contractor's Authorized Representative"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Position"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Date of Notice of Award"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Peformance Security Posted"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Issuing Entity"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Policy No"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Amount of Performance Posted"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Date of Effectivity"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Expiration Date"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Credit Line from Bank"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Amount Credit Line"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Date Credit Line"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Date of Notirization of Contract"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Book No."
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Doc No"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Series of"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Date Issuance of Notice to Proceed"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Issued By"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="name_of_project"
            label="Contract Amount"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="Revised Contract Amount"
            label="Revised Contract Amount"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="Contract Duration"
            label="Contract Duration"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="Revised Contract Time"
            label="Revised Contract Time"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="Time Suspension Extension"
            label="Time Suspension Extension"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="PEO Project Engineer"
            label="PEO Project Engineer"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="Contractors Project Engineer"
            label="Contractors Project Engineer"
            value={infrastructure.name_of_project}
          />
          <CustomTextField
            id="Materials Engineer"
            label="Materials Engineer"
            value={infrastructure.name_of_project}
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
