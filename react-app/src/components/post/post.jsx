import React, { useState, useEffect } from "react";
import "./post.css";
import axios from "axios";

export default function Post({ post }) {
  const [user, setUser] = useState(null);
  const [like, setLike] = useState(post.likes?.length || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/users/${post.userId}`);
        setUser(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user:", err);
        setLoading(false);
      }
    };
    fetchUser();
  }, [post.userId]);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  if (loading || !user) {
    return (
      <div className="post">
        <p>Loading...</p>
      </div>
    );
  }

  const createdAt = new Date(post.createdAt).toLocaleDateString();

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={PF + (user.profilePicture || "ASSETS/default.jpg")}
              alt=""
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{createdAt}</span>
          </div>
          <div className="postTopRight">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {post.img && <img className="postImg" src={PF + post.img} alt="" />}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}ASSETS/like.png`}
              alt=""
              onClick={handleLike}
            />
            <img
              className="likeIcon"
              src={`${PF}ASSETS/heart.png`}
              alt=""
              onClick={handleLike}
            />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">0 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
