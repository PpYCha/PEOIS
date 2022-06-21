import axios from "axios";
import React, { useState, useEffect } from "react";
import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";
import Charts from "../components/Charts";
import Orders from "../components/navigation/Orders";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [projectList, setProjectList] = useState();
  const [funded, setFunded] = useState();
  const [notFunded, setNotFunded] = useState();

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
    <Box flex={6} p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <Box p={2} m={2}>
              <Typography variant="h4">Projects for 2022</Typography>
              <Typography variant="h6">Funded </Typography>
              <Typography variant="h6" fontWeight="100">
                See more
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <Box p={2} m={2}>
              <Typography variant="h4">Projects for 2022</Typography>
              <Typography variant="h6">Not funded </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <Box p={2} m={2}>
              <Typography variant="h5" fontWeight={600}>
                Activity Log
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" m={2}>
                <Avatar />
                <Typography>User 1</Typography>
                <Typography>PEO</Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center" m={2}>
                <Avatar />
                <Typography>User 2</Typography>
                <Typography>PPDO</Typography>
              </Stack>
            </Box>
            <Typography variant="h6" fontWeight="100">
              See more
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
