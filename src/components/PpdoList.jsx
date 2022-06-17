import { Box } from "@material-ui/core";
import { DeleteOutline } from "@mui/icons-material";
import {
  Button,
  ButtonBase,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PpdoList = () => {
  const [projectList, setProjectList] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const getFullName = (params) => {
    return `${params.row.project_name || ""}, Brgy. ${
      params.row.barangay || ""
    }, ${params.row.municipality || ""}, N. Samar`;
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1, hide: true },
    {
      field: "aip_reference_code",
      headerName: "AIP REFERENCE CODE",
      flex: 1,
    },
    // {
    //   field: "project_name",
    //   headerName: "PROJECT NAME",
    //   width: 200,
    // },
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
          <>{params.row.project_status === "0" ? "Not Funded" : "Funded"}</>
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
              <Button variant="outlined">View</Button>
            </Link>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    fetchProjectData();
  }, []);

  const fetchProjectData = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:8000/api/projects");

    if (res.data.status === 200) {
      setProjectList(res.data.projects);

      console.log(res.data.projects);
    }
    setLoading(false);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Paper elevation={3}>
        <Stack direction="row" spacing={2} m={3} justifyContent="space-between">
          <Typography variant="h5">Project List</Typography>
        </Stack>
        <Box m={2}>
          {loading && <CircularProgress color="secondary" />}

          {!loading && (
            <DataGrid
              rows={projectList}
              // disableSelectionOnClick
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              autoHeight
              components={{ Toolbar: GridToolbar }}
            />
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default PpdoList;
