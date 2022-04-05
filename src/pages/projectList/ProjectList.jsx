import * as React from "react";
import "./projectList.css";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { projectRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { styled } from "@mui/material/styles";
import Title from "../../components/Title";

export default function ProjectList() {
  const [isSending, setIsSending] = useState(false);
  const [data, setData] = useState(projectRows);

  const [data1, setData1] = useState({
    projects: [],
    loading: true,
  });

  const handleDelete = async (idt) => {
    console.log(idt);
    setData(data1.projects.filter((item) => item.idt !== idt));
    const res = await axios.delete(
      `http://localhost:8000/api/delete-project/${idt}`
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/api/projects");

      if (res.data.status === 200) {
        setData1({
          projects: res.data.projects,
          loading: false,
        });

        console.log(res.data.projects);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 1, hide: true },
    {
      field: "aip_reference_code",
      headerName: "AIP REFERENCE CODE",
      flex: 1,
    },
    {
      field: "project_name",
      headerName: "PROJECT NAME",
      width: 200,
    },
    { field: "location", headerName: "LOCATION", flex: 1 },
    {
      field: "implementing_office",
      headerName: "IMPLEMENTING OFFICE",
      flex: 1,
      hide: true,
    },
    {
      field: "starting_date",
      headerName: "Starting Date",
      flex: 1,
      hide: true,
    },
    {
      field: "completion_date",
      headerName: "Completion Date",
      flex: 1,
      hide: true,
    },
    {
      field: "expected_output",
      headerName: "EXPECTED OUTPUT",
      flex: 1,
      hide: true,
    },
    { field: "funding_source", headerName: "FUNDING SOURCE", flex: 1 },
    { field: "capital_outlay", headerName: "CAPITAL OUTLAY", flex: 1 },
    { field: "total", headerName: "TOTAL", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/edit-project/" + params.row.id}>
              <button className="projectListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="projectListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <React.Fragment>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
      >
        <Title>Projects List</Title>

        <Item>
          <ListItemButton
            component={RouterLink}
            to="/newProject"
            justifyContent="flex-end"
          >
            <AddCircleIcon />

            <ListItemText primary="New Project" />
          </ListItemButton>
        </Item>
      </Stack>

      <DataGrid
        {...data1}
        rows={data1.projects}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        components={{ Toolbar: GridToolbar }}
      />
    </React.Fragment>
  );
}
