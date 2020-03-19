import React, { Fragment } from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setProfile, toggleFetching} from '../../Redux/profileReducer';
import Preloader from '../../Preloader';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setProfile, toggleFetching,})(ProfileContainer);