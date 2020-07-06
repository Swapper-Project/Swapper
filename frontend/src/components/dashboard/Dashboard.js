import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashBoardTabs from './DashBoardTabs.js';
import UserProfileCard from './UserProfileCard.js';
import UserDetailsCard from './UserDetailsCard.js';

class Dashboard extends Component {
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
        </div>
        <DashBoardTabs />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps)(Dashboard);
