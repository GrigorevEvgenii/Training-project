import {Users} from "./Users";
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, setUsersActionCreator} from "../../Redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
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
        setUsers: (users, totalCount, currentPage) => {
            debugger;
            dispatch(setUsersActionCreator(users, totalCount, currentPage));
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;