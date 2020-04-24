// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";
import dummyData from "../../dummy-data";

// pass props in this file to
const Post = (props) => {
  // set up state for the likes
  // const [posts, setPosts] = useState(dummyData);
  // console.log("Post props: ", props);

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likes={props.post.likes} />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
        setPosts={props.setPosts}
        posts={props.posts}
      />
    </div>
  );
};

export default Post;
