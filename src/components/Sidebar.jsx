import {
  BarChart,
  Construction,
  Home,
  People,
  Psychology,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);
  console.log("side ine:", currentUser.office);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        {currentUser.office === "Provincial Engineering Office" ? (
          <>
            <List
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Dashboard
                </ListSubheader>
              }
            >
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/"
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
                >
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/users"
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemIcon>
                    <People />
                  </ListItemIcon>
                  <ListItemText primary="Users" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/projects"
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemIcon>
                    <Psychology />
                  </ListItemIcon>
                  <ListItemText primary="Projects" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/infrastructures"
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}
                >
                  <ListItemIcon>
                    <Construction />
                  </ListItemIcon>
                  <ListItemText primary="Infrastructures" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/reports"
                  selected={selectedIndex === 4}
                  onClick={(event) => handleListItemClick(event, 4)}
                >
                  <ListItemIcon>
                    <BarChart />
                  </ListItemIcon>
                  <ListItemText primary="Reports" />
                </ListItemButton>
              </ListItem>
            </List>
          </>
        ) : (
          <>
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/projects">
                  <ListItemIcon>
                    <Psychology />
                  </ListItemIcon>
                  <ListItemText primary="Projects" />
                </ListItemButton>
              </ListItem>
            </List>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
