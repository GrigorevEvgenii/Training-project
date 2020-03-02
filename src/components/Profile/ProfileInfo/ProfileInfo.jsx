import React from 'react';
import s from "./ProfileInfo.module.css";

export const ProfileInfo = (props) => {
  return (
    <div className={s.ProfileInfo}>
      <div className={s.imgContainer}>
        <img className={s.img} src={props.url} />
      </div>
      <div className={s.description}>
        {props.description}
      </div>
    </div>
  );
}