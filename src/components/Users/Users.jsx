import React from "react";
import s from "./Users.module.css";
import defaultAvatar from "../../img/user.png"
import * as axios from "axios";

export const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            props.setUsers(response.data.items);
        });

        // props.setUsers([
        //     {
        //         id: 1,
        //         photoUrl: 'https://vignette.wikia.nocookie.net/berserk/images/6/64/E224-Berserker_Armor-Manga-_%D0%91%D1%80%D0%BE%D0%BD%D1%8F-%D0%91%D0%B5%D1%80%D1%81%D0%B5%D1%80%D0%BA%D0%B0.png/revision/latest?cb=20180204114031&path-prefix=ru',
        //         followed: false,
        //         fullName: 'Dmitry',
        //         status: 'I am a boss',
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        //         id: 2,
        //         photoUrl: 'https://vignette.wikia.nocookie.net/berserk/images/6/64/E224-Berserker_Armor-Manga-_%D0%91%D1%80%D0%BE%D0%BD%D1%8F-%D0%91%D0%B5%D1%80%D1%81%D0%B5%D1%80%D0%BA%D0%B0.png/revision/latest?cb=20180204114031&path-prefix=ru',
        //         followed: true,
        //         fullName: 'Sasha',
        //         status: 'I am a boss too',
        //         location: {city: 'Moscow', country: 'Russia'}
        //     },
        //     {
        //         id: 3,
        //         photoUrl: 'https://vignette.wikia.nocookie.net/berserk/images/6/64/E224-Berserker_Armor-Manga-_%D0%91%D1%80%D0%BE%D0%BD%D1%8F-%D0%91%D0%B5%D1%80%D1%81%D0%B5%D1%80%D0%BA%D0%B0.png/revision/latest?cb=20180204114031&path-prefix=ru',
        //         followed: false,
        //         fullName: 'Andrew',
        //         status: 'I am a boss too',
        //         location: {city: 'Kiev', country: 'Ukraine'}
        //     }]);
    }

    
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
                                    <span className={s.userName}>{item.name}</span>
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