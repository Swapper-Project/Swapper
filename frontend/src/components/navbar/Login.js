import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions';
import LoginForm from './LoginForm';

class Login extends React.Component {
  onSubmit = formVals => {
    this.props.signIn(formVals);
  };

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { signIn }
)(Login);
