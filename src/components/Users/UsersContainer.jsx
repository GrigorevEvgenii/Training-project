 import React, { Fragment } from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {getUsers, PageButtonClick, arrowPageButtonClick, followUser, unFollowUser} from '../../Redux/usersReducer';
import s from './Users.module.css';
import Preloader from '../../Preloader';

export class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(1, this.props.pageSize);
    }

    handlePageButtonClick = (item, pageSize) => {
        this.props.PageButtonClick(item, pageSize)
    }

    handlePreviousPageClick = (currentPage, pageSize) => {
        currentPage--;
        this.props.arrowPageButtonClick(currentPage, pageSize);
    }

    handleNextPageClick = (currentPage, pageSize) => {
        currentPage++;
        this.props.arrowPageButtonClick(currentPage, pageSize);
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
                handleFollow={this.props.followUser} handleUnfollow={this.props.unFollowUser}
                pageButtons={pageButtons} users={this.props.users}
                currentPage={this.props.currentPage} />
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

const UsersContainerAPI = connect(mapStateToProps, {
    getUsers,
    PageButtonClick,
    arrowPageButtonClick,
    followUser,
    unFollowUser,
})(UsersContainer);

export default UsersContainerAPI;