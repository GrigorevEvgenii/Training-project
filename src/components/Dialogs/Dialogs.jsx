import React from 'react';
import s from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";

export const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map((dialog) => <DialogsItem name={dialog.name} id={dialog.id} />);
    const messagesElements = props.messages.map((message) => <MessagesItem id={message.id} message={message.message}/>);
    const sendMessageHandler = () => {
        props.sendMessageHandler();
    }
    const updateNewMessageHandler = (event) => {
        props.updateNewMessageHandler(event.target.value);
    }

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.Messages}>
                { messagesElements }
            </div>
            <div className={s.SendMessage}>
                <textarea rows="4" className={s.SendMessageArea} onChange={updateNewMessageHandler} value={props.currentMessageBody} />
                <button onClick={sendMessageHandler} className={s.SendMessageBtn}>Отправить</button>
            </div>
        </div>
    );
}

export default Dialogs;