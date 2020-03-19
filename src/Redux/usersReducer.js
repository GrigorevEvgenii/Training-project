const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";

const initialState = {
        users: [],
        pageSize: 5,
        currentPage: 1,
        isFetching: true,
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
            return {
                ...state,
                users: action.users,
                totalCount: action.totalCount,
                currentPage: action.currentPage,
            }
        }
        case TOGGLE_FETCHING: {
            return {
                    ...state,
                    isFetching: action.isFetching,
            }
        }
        default: return state;
    }
}

export const follow = (userId) => ({
    type: FOLLOW, 
    userId 
})
export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId 
})
export const setUsers = (users, totalCount, currentPage) => ({
    type: SET_USERS,
    users,
    totalCount,
    currentPage,
})
export const toggleFetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching,
});
export const setPagesize = (pageSize) => ({
    type: SET_PAGE_SIZE,
    pageSize,
});

export default usersReducer;