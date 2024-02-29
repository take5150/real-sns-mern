import React, { useState } from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material/";

import { Users } from "../../dummyData";

export default function Post({ post }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = Users.filter((user) => user.id === post.userId);

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={PUBLIC_FOLDER + user[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">{user[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">SNS creating</span>
          <img src={PUBLIC_FOLDER + post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postButtomLeft">
            <img
              src="/assets/heart.png"
              className="likeIcon"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
