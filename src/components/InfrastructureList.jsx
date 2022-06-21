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

const InfrastructureList = () => {
  const [infastructureList, setInfastructureList] = useState([{}]);

  const [loading, setLoading] = useState(true);

  const columns = [{ field: "id", headerName: "ID", flex: 1, hide: true }];
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
          {loading && <CircularProgress color="secondary" />}

          {!loading && (
            <DataGrid
              rows={infastructureList}
              columns={columns}
              // getEstimatedRowHeight={() => 100}
              // getRowHeight={() => "auto"}
              sx={{
                "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": {
                  py: "8px",
                },
                "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
                  py: "15px",
                },
                "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell": {
                  py: "22px",
                },
              }}
              components={{ Toolbar: GridToolbar }}
              disableSelectionOnClick
              // hideFooterPagination
              pageSize={50}
              rowsPerPageOptions={[50]}
              autoHeight
              rowHeight={38}
            />
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default InfrastructureList;
