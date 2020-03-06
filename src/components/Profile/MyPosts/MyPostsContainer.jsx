import React from "react";
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, newTextActionCreator} from "../../../Redux/profileReducer";

export const MyPostsContainer = (props) => {
  let state = props.store.getState();
  debugger;
  const newPostHandler = () => {
    props.store.dispatch(addPostActionCreator());
  }
  
  const newText = (value) => {
    props.store.dispatch(newTextActionCreator(value));
  }

  return (
    <MyPosts newText={newText} newPostHandler={newPostHandler} currentText={state.profilePage.currentText} posts={state.profilePage.posts} />
  );
}