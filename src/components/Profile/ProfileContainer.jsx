import React, { Fragment } from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setProfile, toggleFetching} from '../../Redux/profileReducer';
import Preloader from '../../Preloader';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) userID = 2;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
        .then(response => {
            this.props.setProfile(response.data);
            this.props.toggleFetching(false);
        });
}
  
  render() {
    debugger;
    console.log(this.props);
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
  }
}

let WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfile, toggleFetching,})(WithUrlProfileContainer);