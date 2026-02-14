import React from "react";
import "./feed.css";
import Post from "../post/post";
import Share from "../share1/Share";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("posts/timeline/699016a1c794a850f5cb4abc");
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err.message);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {error && <p style={{ color: "red" }}>Error loading posts: {error}</p>}
        {posts.map((p) => (
          <Post key={p._id || p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
