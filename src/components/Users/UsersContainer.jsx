import {Users} from "./Users";
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, setUsersActionCreator} from "../../Redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFollow: (uid) => {
            dispatch(followActionCreator(uid));
        },
        handleUnfollow: (uid) => {
            dispatch(unfollowActionCreator(uid));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;