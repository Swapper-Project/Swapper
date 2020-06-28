import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions';
import RegisterForm from './RegisterForm';

class Register extends React.Component {
  onSubmit = formVals => {
    this.props.register(formVals);
  };

  render() {
    return (
      <div>
        <RegisterForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { register }
)(Register);
