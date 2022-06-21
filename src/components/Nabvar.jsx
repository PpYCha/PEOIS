import React, { useState, useContext } from "react";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Engineering, Mail, Notifications, Pets } from "@mui/icons-material";
import { Link } from "react-router-dom";
import AuthReducer from "../context/AuthReducer";
import { AuthContext } from "../context/AuthContext";

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Nabvar = () => {
  const { dispatch } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box sx={{ alignItems: "center" }}>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            PEOIS
          </Typography>
        </Box>

        <Icons>
          {/* <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge> */}
          <Avatar
            sx={{ height: 30, width: 30 }}
            src=""
            onClick={(e) => setOpen(true)}
          />
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo"
        aria-labelledby="demo-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {/* <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem> */}
        <Link
          component={Link}
          to="/user-signin"
          onClick={() => {
            dispatch({ type: "LOGOUT" });
          }}
          style={{ textDecoration: "none" }}
        >
          <MenuItem style={{ color: "black" }}>Logout</MenuItem>
        </Link>
      </Menu>
    </AppBar>
  );
};

export default Nabvar;
