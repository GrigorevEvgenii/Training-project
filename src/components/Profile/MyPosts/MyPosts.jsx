import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = (props) => {
  let postsElements = props.posts.map((item) => <Post text={item.text} likesCount={item.likesCount}/>);
  
  let ref = React.createRef();
  
  const newPostHandler = () => {
    debugger;
    props.addPost();
  }
  
  const newText = () => {
    debugger;
    props.newText(ref.current.value);
  }

  return (
    <div className={s.posts}>
      My posts
      <label>
        New Post
        <br /><textarea onChange={newText} value={props.currentText} ref={ref}/>
      </label>
      <button onClick={newPostHandler}>Добавить запись</button>
      {postsElements}
    </div>
  );
}