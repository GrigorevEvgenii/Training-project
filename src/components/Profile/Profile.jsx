import React from 'react';
import s from "./Profile.module.css";
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
return (
<div className={s.Profile}>
  <ProfileInfo description="some text" url="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg" />
  <div className={s.posts}>
    My posts
    <div>
      New post
    </div>
    <div>
      <Post text="Lorem Ipsum" />
      <Post text="Oh shit, here we go again" />
    </div>
  </div>
</div>
);
}

export default Profile;