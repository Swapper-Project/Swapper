import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../redux/actions/userActions';
import DashBoardTabs from './DashBoardTabs.js';
import UserProfileCard from './UserProfileCard.js';
import UserDetailsCard from './UserDetailsCard.js';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUserData(this.props.userId);
  }

  componentDidUpdate() {
    if (!this.props.isSignedIn) {
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <div>
        <div className='container-flexbox-userprofile'>
          <UserProfileCard />
          <UserDetailsCard />
        </div >
        <div className='container-flexbox-dashboard'>
          <DashBoardTabs />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
  userId: state.auth.userId
});

export default connect(
  mapStateToProps,
  { getUserData }
)(Dashboard);
