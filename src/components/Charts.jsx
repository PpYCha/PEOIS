import axios from "axios";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {
  const [projectList, setProjectList] = useState();
  const [loading, setLoading] = useState(false);

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
    <Box>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={projectList}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={"project_name"} stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Charts;
