const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
        users: [
            {
                id: 1,
                photoUrl: 'https://vignette.wikia.nocookie.net/berserk/images/6/64/E224-Berserker_Armor-Manga-_%D0%91%D1%80%D0%BE%D0%BD%D1%8F-%D0%91%D0%B5%D1%80%D1%81%D0%B5%D1%80%D0%BA%D0%B0.png/revision/latest?cb=20180204114031&path-prefix=ru',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://vignette.wikia.nocookie.net/berserk/images/6/64/E224-Berserker_Armor-Manga-_%D0%91%D1%80%D0%BE%D0%BD%D1%8F-%D0%91%D0%B5%D1%80%D1%81%D0%B5%D1%80%D0%BA%D0%B0.png/revision/latest?cb=20180204114031&path-prefix=ru',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://vignette.wikia.nocookie.net/berserk/images/6/64/E224-Berserker_Armor-Manga-_%D0%91%D1%80%D0%BE%D0%BD%D1%8F-%D0%91%D0%B5%D1%80%D1%81%D0%B5%D1%80%D0%BA%D0%B0.png/revision/latest?cb=20180204114031&path-prefix=ru',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ],
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
export const setUsersActionCreator = (users) => ({
    type: SET_USERS,
    users 
})

export default usersReducer;