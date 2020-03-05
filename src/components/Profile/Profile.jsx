import React from 'react';
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.Profile}>
      <ProfileInfo description="some text" url="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg" />
        <div>
          <MyPosts posts={props.profilePage.posts} likesCount={props.profilePage.posts.likesCount} currentText={props.profilePage.currentText} dispatch={props.dispatch} />
        </div>
    </div>
  );
}

export default Profile;