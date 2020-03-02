import React from "react";
import s from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

export const DialogsItem = (props) => {
    const path = "/dialogs/" + props.id;

    return (
        <div className={s.DialogsItem}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}