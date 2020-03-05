const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

const dialogsReducer = (state, action) => {
    debugger;
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.currentMessageBody = action.messageBody;
            return state;
        }
        case SEND_MESSAGE: {
            state.messages = [...state.messages, 
                {
                    id: state.messages.length + 1, 
                    message: state.currentMessageBody
                }];
            state.currentMessageBody = "";
            return state;
        }
        default: {
            return state;
            console.log('pidor');
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