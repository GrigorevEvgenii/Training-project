import React from "react";
import s from "./Users.module.css";
import defaultAvatar from "../../img/user.png";
import * as axios from "axios";

export class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            debugger;
            this.props.setUsers(response.data.items, response.data.totalCount, 1);
        });
    }

    handlePageButtonClick(item) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}`)
        .then(response => {
            debugger;
            this.props.setUsers(response.data.items, response.data.totalCount, item);
        });
    }

    render() {
        let pageSize = this.props.totalCount / this.props.users.length;
        let pageButtons = [];
        for (let i = 0; i < 5; i++) {
            pageButtons.push(i + 1);
        }
        pageButtons = pageButtons.map((item) => {
            return <span onClick={() => this.handlePageButtonClick(item)} className={item === this.props.currentPage ? `${s.pageButton} + ${s.selectedPageButton}` : s.pageButton}>{item}</span>;
        });

        return (
            <div className={s.users}>
               <div className={s.pageButtons}> {pageButtons}</div>
                {
                    this.props.users.map((item) => {
                        return (
                            <div className={s.userContainer}>
                                
                                <div className={s.photoContainer}>
                                    <img src={item.photos.small ? item.photos.small : defaultAvatar} alt="avatar" className={s.photo} />
                                    {item.followed === true ? 
                                    <button onClick={() => this.props.handleUnfollow(item.id)} className={s.button}>Unfollow</button> :
                                    <button onClick={() => this.props.handleFollow(item.id)} className={s.button}>Follow</button> }
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
}