// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";

const CommentSection = props => {
  // Add state for the comments
  const [posts, setPosts] = useState(dummyData);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {posts.map((post, i) => {
        return post.comments.map((comment, i) => {
          return <Comment comment={comment} />;
        });
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
