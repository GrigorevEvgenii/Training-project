import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = (props) => {
  let postsElements = props.posts.map((item) => <Post text={item.text} />);

  return (
    <div className={s.posts}>
      My posts
      <label>
        New Post
        <br /><textarea />
      </label>
      {postsElements}
    </div>
  );
}