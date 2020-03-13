import React from "react";
import {useEffect} from "react";
import s from "./Users.module.css";
import defaultAvatar from "../../img/user.png";
import * as axios from "axios";

export const Users = (props) => {
    useEffect(() => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });
        }
    });

    return (
        <div className={s.users}>
            {
                props.users.map((item) => {
                    return (
                        <div className={s.userContainer}>
                            
                            <div className={s.photoContainer}>
                                <img src={item.photos.small ? item.photos.small : defaultAvatar} alt="avatar" className={s.photo} />
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