import React from "react";
import s from "./Users.module.css";
import defaultAvatar from "../../img/user.png";
import { NavLink } from "react-router-dom";

export let Users = (props) => {
    return (
        <div className={s.users}>
               <div className={s.pageButtons}>
                <span><i onClick={props.handlePreviousPageClick}>&lt;</i>
                    {props.pageButtons}
                    <i onClick={props.handleNextPageClick}>&gt;</i></span>
               </div>
                {
                    props.users.map((item) => {
                        return (
                            <div className={s.userContainer}>
                                <div className={s.photoContainer}>
                                    <NavLink to={`Profile/${item.id}`}>
                                        <img src={item.photos.small ? item.photos.small : defaultAvatar} alt="avatar" className={s.photo} />
                                    </NavLink>
                                    {item.followed === true ? 
                                    <button onClick={() => props.handleUnfollow(item.id)} className={s.button}>Unfollow</button> :
                                    <button onClick={() => props.handleFollow(item.id)} className={s.button}>Follow</button> }
                                </div>
                                <div className={s.aboutUserContainer}>
                                    <div className={s.userDescriptionContainer}>
                                        <span className={s.userName}>{item.name }</span>
                                        <span className={s.userStatus}>{item.status}</span>
                                    </div>
                                    <div className={s.locationContainer}>
                                        <span className={s.userCountry}>{"item.location.country"}</span>
                                        <span className={s.userCity}>{"item.location.city"}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
    );
}