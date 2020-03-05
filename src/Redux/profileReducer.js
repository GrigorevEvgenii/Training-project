const ADD_POST = "ADD_POST";
const NEW_TEXT = "NEW_TEXT";

const profileReducer = (state, action) => {
    debugger;
    switch(action.type) {
        case ADD_POST: {
            state.posts = [...state.posts, {
                id: state.posts.length + 1,
                text: state.currentText,
                likesCount: state.posts.length + 1,
            }];
            state.currentText = "";

            return state;
        }
        case NEW_TEXT: {
            state.currentText= action.text;
            
            return state;
        }
        defualt: {
            return state;
        }
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

export default profileReducer;