import { Box } from "@material-ui/core";
import {
  Delete,
  CheckCircle,
  Warning,
  Edit,
  Construction,
} from "@mui/icons-material";
import {
  Button,
  ButtonBase,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  styled,
  IconButton,
} from "@mui/material";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataGridComponent from "./DataGridComponent";
import { pink, green, red } from "@mui/material/colors";

import { fetchProjects, deleteProject } from "../api/project";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const ProjectList = () => {
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const handleDelete = async (id) => {
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
      minWidth: 130,
    },

    {
      field: "projectTitle",
      headerName: "PROJECT NAME",
      minWidth: 200,
      valueGetter: getFullName,
    },
    {
      field: "implementing_office",
      headerName: "IMPLEMENTING OFFICE",
      minWidth: 175,
      hide: true,
    },
    {
      field: "starting_date",
      headerName: "Starting Date",
      minWidth: 100,
      hide: true,
    },
    {
      field: "completion_date",
      headerName: "Completion Date",
      minWidth: 100,
      hide: true,
    },
    {
      field: "expected_output",
      headerName: "EXPECTED OUTPUT",
      minWidth: 300,
      hide: true,
    },
    { field: "funding_source", headerName: "FUNDING SOURCE", minWidth: 135 },
    { field: "capital_outlay", headerName: "CAPITAL OUTLAY", minWidth: 100 },
    { field: "total", headerName: "TOTAL", minWidth: 100 },
    {
      field: "project_status",
      headerName: "Status",
      minWidth: 175,
      renderCell: (params) => {
        return (
          <>
            {params.row.project_status === "Not Funded" ? (
              <>
                <Typography
                  sx={{
                    display: "flex",
                    border: 1,
                    borderColor: "red",
                    borderRadius: "15px",
                    justifyContent: "flex-start",
                    color: "red",
                    paddingLeft: 1,
                    paddingRight: 1,
                    paddingBottom: 0.5,
                    paddingTop: 0.5,
                    fontWeight: "100",
                  }}
                >
                  <Warning sx={{ color: red[500], marginRight: 1 }} />
                  Not Funded
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  sx={{
                    display: "flex",
                    border: 1,
                    borderColor: "green",
                    borderRadius: "15px",
                    justifyContent: "flex-start",
                    color: "green",
                    paddingLeft: 1,
                    paddingRight: 1,
                    paddingBottom: 0.5,
                    paddingTop: 0.5,
                    fontWeight: "100",
                  }}
                >
                  <CheckCircle sx={{ color: green[500], marginRight: 1 }} />
                  Funded
                </Typography>
              </>
            )}
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 340,
      renderCell: (params) => {
        return (
          <>
            <Stack direction="row" spacing={1}>
              <Link to={"/edit-project/" + params.row.id}>
                <IconButton aria-label="edit">
                  <Edit />
                </IconButton>
              </Link>
              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(params.row.id)}
              >
                <Delete sx={{ color: "red" }} />
              </IconButton>
              <Link to={"/add-infrastructure" + "-" + params.row.id}>
                <IconButton aria-label="infastructure">
                  <Construction sx={{ color: "orange" }} />
                </IconButton>
              </Link>
            </Stack>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    fetchAPI();

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => setUsers(json));
  }, []);

  const fetchAPI = async () => {
    setLoading(true);

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
          <DataGridComponent
            loading={loading}
            rows={projectList}
            columns={columns}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default ProjectList;
