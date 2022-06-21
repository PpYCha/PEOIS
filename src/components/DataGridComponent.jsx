import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import {
  Button,
  ButtonBase,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";

const StyledToolbar = styled(DataGrid)({
  height: 52,
});

const DataGridComponent = ({ rows, columns }) => {
  return (
    <>
      <DataGrid
        rows={rows}
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
    </>
  );
};

export default DataGridComponent;
