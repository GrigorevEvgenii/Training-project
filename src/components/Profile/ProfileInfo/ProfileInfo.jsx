import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from '../../../Preloader';
import defaultAvatar from "../../../img/user.png";

export const ProfileInfo = (props) => {
    if (!props.profile) {
      return <Preloader />
  }
  
  return (
    <div className={s.ProfileInfo}>
      <div className={s.imgContainer}>
        <img className={s.img} src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar} />
      </div>
      <div className={s.description}>
        
      </div>
    </div>
  );
}