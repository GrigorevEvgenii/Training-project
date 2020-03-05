import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {addPostActionCreator, newTextActionCreator} from "../../../Redux/state";

export const MyPosts = (props) => {
  let postsElements = props.posts.map((item) => <Post text={item.text} likesCount={item.likesCount}/>);
  
  let ref = React.createRef();
  
  const newPostHandler = () => {
    props.dispatch(addPostActionCreator());
  }
  
  const newText = () => {
    props.dispatch(newTextActionCreator(ref.current.value));
  }

  return (
    <div className={s.posts}>
      <div className={s.title}>
        <span className={s.subtitle}>My posts:</span>
      </div>

      {postsElements}

      <div className={s.AddNewPostContainer}>
        <label className={s.PostInputLabel}>
          New Post
          <br />
          <textarea className={s.PostInput} onChange={newText} defaultValue={props.currentText} ref={ref} rows="4" />
        </label>
        <button className={s.AddPostBtn} onClick={newPostHandler}>Добавить запись</button>
      </div>
    </div>
  );
}