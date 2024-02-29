import React, { useEffect, useState } from "react";
import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import TimeLine from "../../components/timeline/TimeLine";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=takehiro3`);
      setUser(response.data);
    };
    fetchUser();
  }, []);

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRigth">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={PUBLIC_FOLDER + "/post/3.jpeg"}
                className="profileCoverImg"
                alt=""
              />
              <img
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightButtom">
            <TimeLine username="takehiro3" />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
