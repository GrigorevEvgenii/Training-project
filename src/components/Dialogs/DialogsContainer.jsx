import React from 'react';
import {Dialogs} from "./Dialogs";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {updateNewMessageTextCreator, sendMessageCreator} from "../../Redux/dialogsReducer";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    
    const sendMessageHandler = () => {
        props.store.dispatch(sendMessageCreator());
    }
    const updateNewMessageHandler = (value) => {
        props.store.dispatch(updateNewMessageTextCreator(value));
    }

    return (
        <Dialogs updateNewMessageHandler={updateNewMessageHandler} sendMessageHandler={sendMessageHandler} 
        dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} currentMessageBody={state.dialogsPage.currentMessageBody} />
    );
}

export default DialogsContainer;