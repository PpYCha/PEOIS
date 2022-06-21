import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import Home from "../pages/HomePage";
import User from "../pages/UserPage";
import ProjectPage from "../pages/ProjectPage";
import Report from "../pages/ReportPage";

import UserAddEdit from "../components/UserAddEdit";
import ProjectAddEdit from "../components/ProjectAddEdit";
import InfrastructurePage from "../pages/InfrastructurePage";
import InfrastructureAddEdit from "../components/InfrastructureAddEdit";

function AdminRoute() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/user-signin" />;
  };

  // console.log(currentUser.office);

  return (
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
      <Route
        exact
        path="/reports"
        element={
          <RequireAuth>
            <Report />
          </RequireAuth>
        }
      />
      //User
      <Route
        exact
        path="/users"
        element={
          <RequireAuth>
            <User />
          </RequireAuth>
        }
      />
      <Route
        exact
        path="/newUser"
        element={
          <RequireAuth>
            <UserAddEdit />
          </RequireAuth>
        }
      />
      <Route
        path="/edit-user/:userId"
        element={
          <RequireAuth>
            <UserAddEdit />
          </RequireAuth>
        }
      />
      <Route
        path="/update-user/:userId"
        element={
          <RequireAuth>
            <UserAddEdit />
          </RequireAuth>
        }
      />
      //Project
      <Route
        exact
        path="/projects"
        element={
          <RequireAuth>
            <ProjectPage />
          </RequireAuth>
        }
      />
      <Route
        exact
        path="/add-project"
        element={
          <RequireAuth>
            <ProjectAddEdit />
          </RequireAuth>
        }
      />
      <Route
        path="/edit-project/:projectId"
        element={
          <RequireAuth>
            <ProjectAddEdit />
          </RequireAuth>
        }
      />
      //Infrastructure
      <Route
        exact
        path="/infrastructures"
        element={
          <RequireAuth>
            <InfrastructurePage />
          </RequireAuth>
        }
      />
      <Route
        exact
        path="/add-infrastructure"
        element={
          <RequireAuth>
            <InfrastructureAddEdit />
          </RequireAuth>
        }
      />
      <Route
        path="/edit-infrastructure/:infrastructureId"
        element={
          <RequireAuth>
            <ProjectAddEdit />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default AdminRoute;
