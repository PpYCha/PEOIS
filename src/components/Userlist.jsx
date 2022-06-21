import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { DeleteOutline } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { userRows } from "../dummyData";

const Userlist = () => {
  const [data, setData] = useState(userRows);
  const [listUser, setListUser] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `http://localhost:8000/api/delete-user/${id}`
    );

    fetchDataUserList();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    // {
    //   field: "user",
    //   headerName: "User",
    //   width: 125,
    //   renderCell: (params) => {
    //     return (
    //       //   <div className="userListUser">
    //       //     <img className="userListImg" src={params.row.avatar} alt="" />
    //       //     {params.row.username}
    //       //   </div>
    //       <Avatar sx={{ height: 30, width: 30 }} src={params.row.avatar} />
    //     );
    //   },
    // },

    { field: "name", headerName: "Name", flex: 1 },
    { field: "office", headerName: "Office", flex: 1 },
    {
      field: "is_active",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            {params.row.is_active === "1" ? (
              <Typography>active</Typography>
            ) : (
              <Typography>inactive</Typography>
            )}
          </>
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
            <Link to={"/edit-user/" + params.row.id}>
              <Button variant="outlined">Edit</Button>
            </Link>
            <DeleteOutline onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  useEffect(() => {
    fetchDataUserList();
  }, []);

  const fetchDataUserList = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:8000/api/users");

    if (res.data.status === 200) {
      setListUser(res.data.users);
      console.log("list:", listUser);
    }
    setLoading(false);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Paper elevation={3}>
        <Stack direction="row" spacing={2} m={3} justifyContent="space-between">
          <Typography variant="h5">User List</Typography>
          <Link to="/newUser" style={{ textDecoration: "none" }}>
            <Button variant="contained">Add New User</Button>
          </Link>
        </Stack>

        {loading && <CircularProgress color="secondary" />}

        {!loading && (
          <Box m={2}>
            <DataGrid
              rows={listUser}
              // disableSelectionOnClick
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              autoHeight
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Userlist;
