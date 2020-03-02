import React from "react";
import s from "./Post.module.css";

export const Post = (props) => {
  return (
    <div className={s.Post}>
      {props.text}
    </div>
  );
}