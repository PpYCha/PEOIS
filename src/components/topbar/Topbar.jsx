import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">PEO Information System</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-1/274667017_4676692592442730_3792130724342147950_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=X2g21UU-TWYAX_JuHMq&_nc_ht=scontent.fceb1-1.fna&oh=00_AT8hrldanvohYHYRVuxW7T5sv7SAOeqycEAmScduUytUoQ&oe=622D71AF"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
