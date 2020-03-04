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
          }
    },
    
    getState() {
        return this._state;
    },

    addPost() {
        let tmp = {
            id: this._state.profilePage.posts.length + 1,
            text: this._state.profilePage.currentText,
            likesCount: this._state.profilePage.posts.length + 1,
        }
        this._state.profilePage.posts.push(tmp);
        this._state.profilePage.currentText = "";
        this._callSubscriber(this.getState());
    },
    
    _callSubscriber() {
        console.log("state has been changed");
    },
    
    newText(text) {
        this._state.profilePage.currentText= text;
        this._callSubscriber(this.getState());
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}