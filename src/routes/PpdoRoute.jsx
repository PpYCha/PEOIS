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
import PpdoAddEdit from "../components/PpdoAddEdit";

function PpdoRoute() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/user-signin" />;
  };

  // console.log(currentUser.office);

  return (
    <Routes>
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
            <PpdoAddEdit />
          </RequireAuth>
        }
      />
      <Route
        path="/edit-project/:projectId"
        element={
          <RequireAuth>
            <PpdoAddEdit />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default PpdoRoute;
