import React, { Fragment } from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../Redux/profileReducer';
import Preloader from '../../Preloader';
import {withRouter} from 'react-router-dom';
import {usersAPI} from '../../api/api.js';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) userID = 2;
    this.props.getUserProfile(userID);
}
  
  render() {
    return(
      <Fragment>
        { this.props.isFetching ? <Preloader /> : null}
        <Profile {...this.props} profile={this.props.profile} />
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
      isFetching: state.profilePage.isFetching,
      profile: state.profilePage.profile,
      id: state.auth.id,
  }
}

let WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlProfileContainer);