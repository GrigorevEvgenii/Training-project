import {cloneDeep} from "lodash";

const ADD_POST = "ADD_POST";
const NEW_TEXT = "NEW_TEXT";

const initialState = {
    posts: [{
            id: 1,
            text: 'Hi, how are you?',
            likesCount: 12
        },
        {
            id: 2,
            text: 'It\'s my first post',
            likesCount: 11
        },
        {
            id: 3,
            text: 'Blabla',
            likesCount: 3
        },
        {
            id: 4,
            text: 'Dada',
            likesCount: 11
        }
    ],
    currentText: "Some text"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_TEXT: {
            let newState = Object.assign({}, state);
            newState.currentText = action.text;

            return newState;
        }
        case ADD_POST: {
            let newState = cloneDeep(state);
            newState.posts = [...state.posts, {
                id: state.posts.length + 1,
                text: state.currentText,
                likesCount: state.posts.length + 1,
            }];
            newState.currentText = "";
            debugger;   
            return newState;
        }
        default: {
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