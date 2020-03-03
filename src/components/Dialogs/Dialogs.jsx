import React from 'react';
import s from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map((dialog) => <DialogsItem name={dialog.name} id={dialog.id} />);
    const messagesElements = props.state.messages.map((message) => <MessagesItem id={message.id} message={message.message}/>);

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.Messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;