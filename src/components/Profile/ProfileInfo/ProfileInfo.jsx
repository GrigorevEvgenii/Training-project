import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from '../../../Preloader';

export const ProfileInfo = (props) => {
    if (!props.profile) {
      return <Preloader />
  }
  
  return (
    <div className={s.ProfileInfo}>
      <div className={s.imgContainer}>
        <img className={s.img} src={props.profile.photos.large} />
      </div>
      <div className={s.description}>
        
      </div>
    </div>
  );
}