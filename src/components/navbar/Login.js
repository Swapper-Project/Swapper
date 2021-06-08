import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/authActions';
import LoginForm from './LoginForm';
import { withRouter } from 'react-router-dom';
import auth from '../../auth';

class Login extends React.Component {
  onSubmit = formVals => {
    this.props.signIn(formVals).then(() => {
      if (this.props.isSignedIn) {
        auth.login(() => {
          this.props.history.push('/dashboard');
        });
      }
    });
  };

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { signIn }
  )
)(Login);
