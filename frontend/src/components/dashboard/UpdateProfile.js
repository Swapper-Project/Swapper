import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { getUserData } from '../../redux/actions/userActions';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import UpdateProfileForm from './UpdateProfileForm';

const useStyles = theme => ({
  root: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '40%',
    minWidth: 300,
    backgroundColor: '#ededed'
  },
  title: {
    textAlign: 'center'
  }
});

class UpdateProfile extends Component {
  componentDidUpdate() {
    if (!this.props.isSignedIn) {
      this.props.history.push('/');
    }
  }

  onSubmit = formVals => {
    this.props.getUserData(formVals).then(() => {
      if (!this.props.isSignedIn) {
        this.props.history.push('/');
      } else {
        this.props.history.push('/dashboard');
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
          <Typography className={classes.title} variant='h4'>
            Update Profile Details
          </Typography>
          <Divider variant='middle' />
          <UpdateProfileForm onSubmit={this.onSubmit} />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
  userId: state.auth.userId
});

UpdateProfile = withStyles(useStyles)(UpdateProfile);

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { getUserData }
  )
)(UpdateProfile);
