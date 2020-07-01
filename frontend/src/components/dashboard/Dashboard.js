import React, {Component} from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux';
import DashBoardTabs from './DashBoardTabs.js'
import UserProfileCard from './UserProfileCard.js'
import UserDetailsCard from './UserDetailsCard.js'
import { withRouter, Link } from "react-router-dom";

class Dashboard extends Component {
  componentDidUpdate() {
    if(!this.props.isSignedIn) {
      this.props.history.push("/");
    }
  }
  render() {
      return (
          <div>
              <div className="container-flexbox-userprofile">
                  <UserProfileCard />
                  <UserDetailsCard />
                  <Link to={'/dashboard/post'}>
                    <h6>Swapper</h6>
                  </Link>
              </div>
              <DashBoardTabs />
          </div>
      );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
});


export default compose(
  withRouter,
  connect(
    mapStateToProps,
))(Dashboard);
