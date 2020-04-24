// You do not need to do anything in this file
import React, { useState } from "react";
import "./CommentInput.css";

const CommentInput = (props) => {
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
            const comment = { username: "Ben", text: e.target.value };
            // alert("new commentts");
            props.setComments([...props.comments, comment]);
            e.target.value = "";
          }
        }}
        type="text"
        value={props.comment}
        placeholder="Add comment... "
      />
    </form>
  );
};

export default CommentInput;
