import React from "react";
import s from "./MessagesItem.module.css";

export const MessagesItem = (props) => {
    return (
        <div className={s.MessagesItem}>
            {props.message}
        </div>
    );
}