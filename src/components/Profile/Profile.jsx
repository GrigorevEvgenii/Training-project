import React from 'react';
import s from "./Profile.module.css";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.Profile}>
      <ProfileInfo description="some text" url="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg" />
        <div>
          <MyPostsContainer store={props.store} />
        </div>
    </div>
  );
}

export default Profile;