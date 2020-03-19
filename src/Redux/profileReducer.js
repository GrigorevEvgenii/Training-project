import {cloneDeep} from "lodash";

const ADD_POST = "ADD_POST";
const NEW_TEXT = "NEW_TEXT";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const SET_PROFILE = "SET_PROFILE";

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
    profile: null,
    currentText: "Some text",
    isFetching: true,
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
        case SET_PROFILE: {
            debugger;
            return {...state, profile: action.profile}
        }
        case TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
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

export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile,
    }
}

export const toggleFetching = (isFetching) => {
    return {
        type: TOGGLE_FETCHING,
        isFetching,
    }
}

export default profileReducer;