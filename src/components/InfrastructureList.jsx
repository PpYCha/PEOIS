import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataGridComponent from "./DataGridComponent";

import { fetchInfrastructures } from "../api/infrastructures";

const InfrastructureList = () => {
  const [infastructureList, setInfastructureList] = useState([{}]);

  const [loading, setLoading] = useState(true);

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "name_of_project", headerName: "Project Name", flex: 1 },
  ];

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    setLoading(true);
    setInfastructureList(await fetchInfrastructures());
    setLoading(false);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Paper elevation={3}>
        <Stack direction="row" spacing={2} m={3} justifyContent="space-between">
          <Typography variant="h5">Infastructures List</Typography>
          <Link to="/add-infrastructure" style={{ textDecoration: "none" }}>
            <Button variant="contained">Add New Infrastructures</Button>
          </Link>
        </Stack>
        <Box m={2}>
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <>
              <DataGridComponent rows={infastructureList} columns={columns} />
            </>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default InfrastructureList;
