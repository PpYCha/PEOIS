import { Box, Typography } from "@mui/material";
import React from "react";

const Rigthbar = () => {
  return (
    <Box flex={1} p={2}>
      <Box position="fixed" width={300} bgcolor="red">
        <Typography>Right</Typography>
      </Box>
    </Box>
  );
};

export default Rigthbar;
