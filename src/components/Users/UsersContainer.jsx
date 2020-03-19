import React, { Fragment } from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {follow, unfollow, setUsers, toggleFetching} from '../../Redux/usersReducer';
import * as axios from 'axios';
import s from './Users.module.css';
import Preloader from '../../Preloader';

export class UsersAPI extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount, 1);
            this.props.toggleFetching(false);
        });
    }

    handlePageButtonClick = (item, pageSize) => {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount, item);
            this.props.toggleFetching(false);
        });
    }

    handlePreviousPageClick = (currentPage, pageSize) => {
        this.props.toggleFetching(true);
        currentPage--;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount, currentPage);
            this.props.toggleFetching(false);
        });
    }

    handleNextPageClick = (currentPage, pageSize) => {
        this.props.toggleFetching(true);
        currentPage++;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount, currentPage);
            this.props.toggleFetching(false);
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pageButtons = [];
        for (let i = 0; i < this.props.pageSize; i++) {
            pageButtons.push(i + 1);
            (i === this.props.pageSize - 1 && pageButtons.push(pagesCount))
        }
        pageButtons = pageButtons.map((item, i) => {
            if (i === pageButtons.length - 1) 
                return <span onClick={() => this.handlePageButtonClick(item, this.props.pageSize)} className={item === this.props.currentPage ? `${s.pageButton} + ${s.selectedPageButton}` : s.pageButton}><i>... </i>{item}</span>;
            else 
                return <span onClick={() => this.handlePageButtonClick(item, this.props.pageSize)} className={item === this.props.currentPage ? `${s.pageButton} + ${s.selectedPageButton}` : s.pageButton}>{item}</span>
        });

        return (
            <Fragment>
                { this.props.isFetching ? <Preloader /> : null}
                <Users handlePreviousPageClick={this.handlePreviousPageClick} handleNextPageClick={this.handleNextPageClick} 
                handleFollow={this.props.follow} handleUnfollow={this.props.unfollow} 
                pageButtons={pageButtons} users={this.props.users}/>
            </Fragment>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
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
    toggleFetching,
})(UsersAPI);

export default UsersContainer;