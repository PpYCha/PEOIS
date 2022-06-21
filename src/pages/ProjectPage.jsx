import { Box, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import PpdoList from "../components/PpdoList";
import ProjectList from "../components/ProjectList";
import { AuthContext } from "../context/AuthContext";

const Project = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Box flex={6} p={2}>
      {currentUser.office === "Provincial Engineering Office" ? (
        <>
          <ProjectList />
        </>
      ) : (
        <>
          <PpdoList />
        </>
      )}
    </Box>
  );
};

export default Project;
