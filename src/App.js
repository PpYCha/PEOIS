import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import User from "./pages/user/User";
import ProjectList from "./pages/projectList/ProjectList";
import NewProject from "./pages/newProject/NewProject";
import Project from "./pages/project/Project";
import SignIn from "./pages/sign/SignIn";
import SignUp from "./pages/sign/SignUp";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import NewInfrastructure from "./pages/newInfrastructure/NewInfrastructure";
import Dashboard from "./components/navigation/Dashboard";
import { Box } from "@mui/material";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/user-signin" />;
  };

  return (
    <Box>
      <Router>
        <Dashboard />

        <Routes>
          <Route path="/user-signin" element={<SignIn />} />
          <Route path="/user-signup" element={<SignUp />} />
          <Route
            exact
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />

          <Route
            path="/users"
            element={
              <RequireAuth>
                <UserList />
              </RequireAuth>
            }
          />
          <Route
            path="/user/:userId"
            element={
              <RequireAuth>
                <User />
              </RequireAuth>
            }
          />
          <Route
            path="/newUser"
            element={
              <RequireAuth>
                <NewUser />
              </RequireAuth>
            }
          />

          <Route
            path="/projects"
            element={
              <RequireAuth>
                <ProjectList />
              </RequireAuth>
            }
          />
          <Route
            path="/edit-project/:id"
            element={
              <RequireAuth>
                <Project />
              </RequireAuth>
            }
          />
          <Route
            path="/newproject"
            element={
              <RequireAuth>
                <NewProject />
              </RequireAuth>
            }
          />
          <Route
            path="/newinfrastructure"
            element={
              <RequireAuth>
                <NewInfrastructure />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
