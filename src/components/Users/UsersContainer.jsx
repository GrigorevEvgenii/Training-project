import React from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {follow, unfollow, setUsers} from '../../Redux/usersReducer';
import * as axios from 'axios';
import s from './Users.module.css'

const PAGE_SIZE = 5;

export class UsersAPI extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            debugger;
            this.props.setUsers(response.data.items, response.data.totalCount, 1);
        });
    }

    handlePageButtonClick(item, pageSize) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${pageSize}`)
        .then(response => {
            debugger;
            this.props.setUsers(response.data.items, response.data.totalCount, item);
        });
    }

    handlePreviousPageClick(currentPage, pageSize) {
        currentPage--;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            debugger;
            this.props.setUsers(response.data.items, response.data.totalCount, currentPage);
        });
    }

    handleNextPageClick(currentPage, pageSize) {
        currentPage++;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            debugger;
            this.props.setUsers(response.data.items, response.data.totalCount, currentPage);
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / PAGE_SIZE);
        let pageButtons = [];
        for (let i = 0; i < PAGE_SIZE; i++) {
            pageButtons.push(i + 1);
            (i === PAGE_SIZE - 1 && pageButtons.push(pagesCount))
        }
        pageButtons = pageButtons.map((item, i) => {
            if (i === pageButtons.length - 1) 
                return <span onClick={() => this.handlePageButtonClick(item, PAGE_SIZE)} className={item === this.props.currentPage ? `${s.pageButton} + ${s.selectedPageButton}` : s.pageButton}><i>... </i>{item}</span>;
            else 
                return <span onClick={() => this.handlePageButtonClick(item, PAGE_SIZE)} className={item === this.props.currentPage ? `${s.pageButton} + ${s.selectedPageButton}` : s.pageButton}>{item}</span>
        });

        return (
            <Users handlePreviousPageClick={this.handlePreviousPageClick} handleNextPageClick={this.handleNextPageClick} handleFollow={this.props.follow} handleUnfollow={this.props.unfollow} pageButtons={pageButtons} users={this.props.users} />
        );
    }
}



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleFollow: (uid) => {
//             debugger;
//             dispatch(followActionCreator(uid));
//         },
//         handleUnfollow: (uid) => {
//             debugger;
//             dispatch(unfollowActionCreator(uid));
//         },
//         setUsers: (users, totalCount, currentPage) => {
//             debugger;
//             dispatch(setUsersActionCreator(users, totalCount, currentPage));
//         },
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
})(UsersAPI);

export default UsersContainer;