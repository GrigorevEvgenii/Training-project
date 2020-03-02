import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.navItem}>
                <NavLink to="/Profile">Profile</NavLink>
            </div>
            <div className={s.navItem}>
                <NavLink to="/Dialogs">Messages</NavLink>
            </div>
            <div className={s.navItem}>
                <a href="#">News</a>
            </div>
            <div className={s.navItem}>
                <a href="#">Music</a>
            </div>
            <div className={s.navItem}>
                <a href="#">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;