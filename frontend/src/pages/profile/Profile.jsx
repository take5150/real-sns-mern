import React from "react";
import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import TimeLine from "../../components/timeline/TimeLine";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRigth">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                className="profileCoverImg"
                alt=""
              />
              <img
                src="assets/person/1.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Take</h4>
              <span className="profileInfoDesc">Hello</span>
            </div>
          </div>
          <div className="profileRightButtom">
            <TimeLine />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}