import "./sidebar.css";
import {
  Home,
  Timeline,
  TrendingUp,
  PersonOutline,
  Psychology,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Home /> Home{" "}
              </li>
            </Link>

            <Link to="users" className="link">
              <li className="sidebarListItem">
                <PersonOutline /> Users{" "}
              </li>
            </Link>
            <Link to="projects" className="link">
              <li className="sidebarListItem">
                <Psychology /> Project{" "}
              </li>
            </Link>
            <li className="sidebarListItem">
              <BarChart /> Reports{" "}
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline /> Mail{" "}
            </li>
            <li className="sidebarListItem">
              <DynamicFeed /> Feedback{" "}
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline /> Messages{" "}
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline /> Manage{" "}
            </li>

            <li className="sidebarListItem">
              <Report /> Reports{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
