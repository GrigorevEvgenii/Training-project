import {cloneDeep} from 'lodash';

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        currentMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            let newState = cloneDeep(state);
            newState.currentMessageBody = action.messageBody;
            return newState;
        }
        case SEND_MESSAGE: {
            let newState = cloneDeep(state);
            newState.messages = [...state.messages, 
                {
                    id: state.messages.length + 1, 
                    message: state.currentMessageBody
                }];
                newState.currentMessageBody = "";
            return newState;
        }
        default: {
            return state;
        }
    }
}

export const updateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        messageBody: text,
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export default dialogsReducer;