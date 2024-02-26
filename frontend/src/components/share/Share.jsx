import React from "react";
import "./Share.css";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import FaceIcon from "@mui/icons-material/Face";
import AnalyticsIcon from "@mui/icons-material/Analytics";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" className="shareProfileImg" alt="" />
          <input
            type="text"
            placeholder="今何している？"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButtons">
          <div className="shareOptions">
            <div className="shareOption">
              <ImageIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">写真</span>
            </div>
            <div className="shareOption">
              <GifIcon htmlColor="hotpink" className="shareIcon" />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOption">
              <FaceIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">気持ち</span>
            </div>
            <div className="shareOption">
              <AnalyticsIcon className="shareIcon" />
              <span className="shareOptionText">投票</span>
            </div>
          </div>
          <button className="shareButton">投稿</button>
        </div>
      </div>
    </div>
  );
}
