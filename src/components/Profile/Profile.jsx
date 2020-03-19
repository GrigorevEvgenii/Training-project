import React from 'react';
import s from "./Profile.module.css";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.Profile}>
      <ProfileInfo profile={props.profile} />
        <div>
          <MyPostsContainer />
        </div>
    </div>
  );
}

export default Profile;