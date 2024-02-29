import React from "react";
import "./Online.css";

export default function Online({ user }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={PUBLIC_FOLDER + user.profilePicture}
          className="rightbarProfileImg"
          alt=""
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUserName">{user.username}</span>
    </li>
  );
}
