import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#ce881c'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ce881c'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white'
      },
      '&:hover fieldset': {
        borderColor: '#ce881c'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ce881c'
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
    backgroundColor: '#ce881c',
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
      <Link component='button' variant='body1' style={{ color: '#ce881c' }}>
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
