const ADD_POST = "ADD_POST";
const NEW_TEXT = "NEW_TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'Hi, how are you?', likesCount: 12},
                {id: 2, text: 'It\'s my first post', likesCount: 11},
                {id: 3, text: 'Blabla', likesCount: 3},
                {id: 4, text: 'Dada', likesCount: 11}
            ],
            currentText: "Some text",
        },
        
        dialogsPage: {
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

            currentMessageBody: "",
          }
    },
    
    _callSubscriber() {
        console.log("state has been changed");
    },
    
    getState() {
        return this._state;
    },

    addPost() {
        this._state.profilePage.posts = [...this._state.profilePage.posts, {
            id: this._state.profilePage.posts.length + 1,
            text: this._state.profilePage.currentText,
            likesCount: this._state.profilePage.posts.length + 1,
        }];
        this._state.profilePage.currentText = "";
        this._callSubscriber(this.getState());
    },
    
    newText(text) {
        this._state.profilePage.currentText= text;
        this._callSubscriber(this.getState());
    },

    sendMessage() {
        this._state.dialogsPage.messages = [...this._state.dialogsPage.messages, 
            {
                id: this._state.dialogsPage.messages.length + 1, 
                message: this._state.dialogsPage.currentMessageBody
            }];
        this._state.dialogsPage.currentMessageBody = "";
        this._callSubscriber(this.getState());
    },

    updateNewMessageText(text) {
        this._state.dialogsPage.currentMessageBody = text;
        this._callSubscriber(this.getState());
    },

    dispatch(action) {
        switch(action.type) {
            case ADD_POST: {
                this.addPost();
                break;
            }
            case NEW_TEXT: {
                this.newText(action.text);
                break;
            }
            case UPDATE_NEW_MESSAGE_TEXT: {
                this.updateNewMessageText(action.messageBody);
                break;
            }
            case SEND_MESSAGE: {
                this.sendMessage();
                break;
            }
            default: {
                console.log(action.type);
            }
        }
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const newTextActionCreator = (text) => {
    return {
        type: NEW_TEXT,
        text: text,
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