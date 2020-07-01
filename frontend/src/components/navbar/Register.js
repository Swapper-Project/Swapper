import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { register } from '../../redux/actions/authActions';
import RegisterForm from './RegisterForm';
import { withRouter } from "react-router-dom";
import auth from '../../auth';

class Register extends React.Component {
  onSubmit = formVals => {
    this.props.register(formVals)
    .then(() => {
      if(this.props.isSignedIn) {
        this.props.history.push("/dashboard");
      }
    });
  };

  render() {
    return (
      <div>
        <RegisterForm onSubmit={this.onSubmit} />
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
  { register }
))(Register);
