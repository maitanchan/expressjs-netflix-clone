import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { getUser } from "../../utils/getUser";

export default function Topbar() {

    const currentUser = getUser()

  return (

    <div className="topbar">

      <div className="topbarWrapper">

        <div className="topLeft">
          <span className="logo">Quản lý phim</span>
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

          <p>{currentUser?.username}</p>

          <img src={currentUser?.profilePic || "/img/noavatar.jpg"}alt="" className="topAvatar" />

        </div>

      </div>

    </div>

  );

}
