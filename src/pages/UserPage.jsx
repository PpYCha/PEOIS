import { Box } from "@mui/material";
import React from "react";
import Userlist from "../components/Userlist";

const User = () => {
  return (
    <Box flex={6} p={2}>
      <Userlist />
    </Box>
  );
};

export default User;
