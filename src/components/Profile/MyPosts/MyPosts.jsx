import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = (props) => { 
  // let posts = [
  //   {id: 1, text: 'Hi, how are you?', likesCount: 12},
  //   {id: 2, text: 'It\'s my first post', likesCount: 11},
  //   {id: 3, text: 'Blabla', likesCount: 11},
  //   {id: 4, text: 'Dada', likesCount: 11}
  // ]

  let posts = props.posts;
  
  let postsElements = posts.map((item) => <Post text={item.text} />);

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