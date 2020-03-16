const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
        users: [],
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.userId) item.followed = true;
                    return item;
                }),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.userId) item.followed = false;
                    return item;
                }),
            }
        }
        case SET_USERS: {
            debugger;
            return {
                ...state,
                users: action.users,
                totalCount: action.totalCount,
                currentPage: action.currentPage,
            }
        }
        default: return state;
    }
}

export const followActionCreator = (userId) => ({
    type: FOLLOW, 
    userId 
})
export const unfollowActionCreator = (userId) => ({
    type: UNFOLLOW,
    userId 
})
export const setUsersActionCreator = (users, totalCount, currentPage) => ({
    type: SET_USERS,
    users,
    totalCount,
    currentPage,
})

export default usersReducer;