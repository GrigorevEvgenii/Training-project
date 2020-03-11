import {MyPosts} from "./MyPosts";
import {addPostActionCreator, newTextActionCreator} from "../../../Redux/profileReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    currentText: state.profilePage.currentText,
    posts: state.profilePage.posts,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    newText: (value) => {
      dispatch(newTextActionCreator(value));
    },
    newPostHandler: () => {
      dispatch(addPostActionCreator());
    },
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);