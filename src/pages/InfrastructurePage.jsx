import { Box } from "@mui/material";
import React from "react";
import InfrastructureList from "../components/InfrastructureList";

const InfrastructurePage = () => {
  return (
    <Box flex={6} p={2}>
      <InfrastructureList />
    </Box>
  );
};

export default InfrastructurePage;
