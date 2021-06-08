import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { authModalClose } from '../../redux/actions/authActions';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

const CssTextField = withStyles({
  root: {
    width: '100%',
    minWidth: 170,
    marginTop: 10,
    marginBottom: 10,
    '& label.Mui-focused': {
      color: '#FF5722'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FF5722'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white'
      },
      '&:hover fieldset': {
        borderColor: '#FF5722'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FF5722'
      }
    },
    color: '#FFFFFF'
  }
})(TextField);

const useStyles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textfield: { width: '100%' },
  textFieldInput: {
    color: 'white'
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#FF5722',
    marginTop: 10,
    marginBottom: 10,
    '&:hover': {
      backgroundColor: 'white'
    }
  }
});

class LoginForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <Alert severity='error'>{error}</Alert>;
    }
  }

  renderInputField = ({ input, label, meta }) => {
    const { classes } = this.props;
    return (
      <div className={classes.textfield}>
        <CssTextField
          label={label}
          type={input.name}
          {...input}
          variant='outlined'
          InputProps={{
            className: classes.textFieldInput
          }}
        />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = formVals => {
    this.props.onSubmit(formVals);
  };

  render() {
    const { classes } = this.props;
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className={classes.container}
      >
        <Field name='email' component={this.renderInputField} label='Email' />
        <Field
          name='password'
          component={this.renderInputField}
          label='Password'
        />
        <Button type='submit' className={classes.loginButton}>
          Sign In
        </Button>
        <Link component='button' variant='body1' style={{ color: '#FF5722' }}>
          Forgot your password?
        </Link>
      </form>
    );
  }
}

const validate = formVal => {
  const errors = {};
  if (!formVal.email) {
    errors.email = 'You must enter an email';
  }
  if (!formVal.password) {
    errors.password = 'You must enter a password';
  }
  return errors;
};

LoginForm = connect(
  null,
  { authModalClose }
)(withStyles(useStyles)(LoginForm));

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);
