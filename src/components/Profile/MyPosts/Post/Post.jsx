import React from "react";
import s from "./Post.module.css";

export const Post = (props) => {
  return (
    <div className={s.post}>
      <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
        {props.text}
      <div>
        <span>like { props.likesCount }</span>
      </div>
    </div>
  );
}