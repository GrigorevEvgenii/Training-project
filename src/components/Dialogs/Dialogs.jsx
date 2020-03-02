import React from 'react';
import s from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";

const Dialogs = (props) => {
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                <DialogsItem name="Vasya" id={1} />
                <DialogsItem name="Ivan" id={2} />
                <DialogsItem name="Sergey" id={3} />
            </div>
            <div className={s.Messages}>
                <MessagesItem message="LoL" />
                <MessagesItem message="What are you doing" />
            </div>
        </div>
    );
}

export default Dialogs;