import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const CssTextField = withStyles({
  root: {
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

const useStyles = makeStyles(theme => ({
  textfield: {
    width: 500,
    margin: 5
  },
  textFieldInput: {
    color: 'white'
  },
  loginButton: {
    width: 500,
    backgroundColor: '#FF5722',
    margin: 5,
    '&:hover': {
      backgroundColor: 'white'
    }
  }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <br />
      <CssTextField
        id='signin-email'
        label='Email'
        type='email'
        variant='outlined'
        className={classes.textfield}
        InputProps={{
          className: classes.textFieldInput
        }}
      />
      <br />
      <CssTextField
        id='signin-password'
        label='Password'
        type='password'
        variant='outlined'
        className={classes.textfield}
        InputProps={{
          className: classes.textFieldInput
        }}
      />
      <br />
      <br />
      <Button variant='contained' className={classes.loginButton}>
        Sign In
      </Button>
      <br />
      <Link component='button' variant='body1' style={{ color: '#FF5722' }}>
        Forgot your password?
      </Link>
      <br />
    </div>
  );
};

const Register = () => {
  const classes = useStyles();
  return (
    <div>
      <br />
      <CssTextField
        id='register-username'
        label='Username'
        variant='outlined'
        className={classes.textfield}
        InputProps={{
          className: classes.textFieldInput
        }}
      />
      <br />
      <CssTextField
        id='register-email'
        label='Email'
        type='email'
        variant='outlined'
        className={classes.textfield}
        InputProps={{
          className: classes.textFieldInput
        }}
      />
      <br />
      <CssTextField
        id='register-password'
        label='Password'
        type='password'
        variant='outlined'
        className={classes.textfield}
        InputProps={{
          className: classes.textFieldInput
        }}
      />
      <br />
      <CssTextField
        id='register-repassword'
        label='Re-enter Password'
        type='password'
        variant='outlined'
        className={classes.textfield}
        InputProps={{
          className: classes.textFieldInput
        }}
      />
      <br />
      <br />
      <Button variant='contained' className={classes.loginButton}>
        Register
      </Button>
      <br />
    </div>
  );
};

export { Login, Register };
