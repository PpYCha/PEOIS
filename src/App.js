import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import { Box, Stack } from "@mui/material";
import Nabvar from "./components/Nabvar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/HomePage";
import Rigthbar from "./components/Rigthbar";
import User from "./pages/UserPage";
import ProjectPage from "./pages/ProjectPage";
import Report from "./pages/ReportPage";

import UserAddEdit from "./components/UserAddEdit";
import ProjectAddEdit from "./components/ProjectAddEdit";
import InfrastructurePage from "./pages/InfrastructurePage";
import InfrastructureAddEdit from "./components/InfrastructureAddEdit";
import SignIn from "./pages/sign/SignIn";
import SignUp from "./pages/sign/SignUp";
import AdminRoute from "./routes/AdminRoute";
import PpdoRoute from "./routes/PpdoRoute";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/user-signin" />;
  };

  // console.log(currentUser.office);

  return (
    <Box>
      {currentUser ? (
        <>
          <Nabvar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar />
            {currentUser.office === "Provincial Planning Development Office" ? (
              <>
                <PpdoRoute />
              </>
            ) : (
              <>
                <AdminRoute />
              </>
            )}
          </Stack>
        </>
      ) : (
        <>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/user-signin" element={<SignIn />} />
            <Route path="/user-signup" element={<SignUp />} />
          </Routes>
        </>
      )}
    </Box>
  );
}

export default App;
