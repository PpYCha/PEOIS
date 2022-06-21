import { Box } from "@material-ui/core";
import { DeleteOutline } from "@mui/icons-material";
import {
  Button,
  ButtonBase,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";

// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataGridComponent from "./DataGridComponent";

import { fetchProjects, deleteProject } from "../api/project";

// const StyledToolbar = styled(DataGrid)({
//   height: 52,
// });

const ProjectList = () => {
  const [projectList, setProjectList] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    // const res = await axios.delete(
    //   `http://localhost:8000/api/delete-project/${id}`
    // );
    await deleteProject(id);
    fetchAPI();
  };

  const getFullName = (params) => {
    return `${params.row.project_name || ""}, Brgy. ${
      params.row.barangay || ""
    }, ${params.row.municipality || ""}, N. Samar`;
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1, hide: true },
    {
      field: "aip_reference_code",
      headerName: "AIP",
      flex: 1,
    },

    {
      field: "projectTitle",
      headerName: "PROJECT NAME",
      flex: 3,
      valueGetter: getFullName,
    },
    {
      field: "implementing_office",
      headerName: "IMPLEMENTING OFFICE",
      flex: 1,
      hide: true,
    },
    {
      field: "starting_date",
      headerName: "Starting Date",
      flex: 1,
      hide: true,
    },
    {
      field: "completion_date",
      headerName: "Completion Date",
      flex: 1,
      hide: true,
    },
    {
      field: "expected_output",
      headerName: "EXPECTED OUTPUT",
      flex: 1,
      hide: true,
    },
    { field: "funding_source", headerName: "FUNDING SOURCE", flex: 1 },
    { field: "capital_outlay", headerName: "CAPITAL OUTLAY", flex: 1 },
    { field: "total", headerName: "TOTAL", flex: 1 },
    {
      field: "project_status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            {params.row.project_status === "Not Funded"
              ? "Not Funded"
              : "Funded"}
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/edit-project/" + params.row.id}>
              <Button variant="outlined">Edit</Button>
            </Link>
            <DeleteOutline onClick={() => handleDelete(params.row.id)} />
            <Link to={"/add-infrastructure" + "-" + params.row.id}>
              <Button variant="outlined">Add Infrastructures</Button>
            </Link>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    setLoading(true);
    console.log(await fetchProjects());
    setProjectList(await fetchProjects());
    setLoading(false);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Paper elevation={3}>
        <Stack direction="row" spacing={2} m={3} justifyContent="space-between">
          <Typography variant="h5">Project List</Typography>
          <Link to="/add-project" style={{ textDecoration: "none" }}>
            <Button variant="contained">Add New Project</Button>
          </Link>
        </Stack>
        <Box m={2}>
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <>
              <DataGridComponent rows={projectList} columns={columns} />
            </>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default ProjectList;
