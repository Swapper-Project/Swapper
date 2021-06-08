import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { updateSwap, setCurrentPost } from '../../redux/actions/postActions';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PostingForm from './dashboardCards/PostHubCard/PostingForm';
import Divider from '@material-ui/core/Divider';

const useStyles = theme => ({
  root: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '60%',
    minWidth: 300,
    backgroundColor: '#ededed'
  },
  title: {
    textAlign: 'center'
  }
});

class EditPost extends Component {
  componentDidUpdate() {
    if (!this.props.isSignedIn) {
      this.props.history.push('/');
    }
  }

  onSubmit = formVals => {
    this.props.updateSwap(formVals).then(() => {
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
            Edit Your Swap
          </Typography>
          <Divider variant='middle' />
          <PostingForm edit={true} onSubmit={this.onSubmit} />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
  userId: state.auth.userId
});

EditPost = withStyles(useStyles)(EditPost);

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { updateSwap, setCurrentPost }
  )
)(EditPost);
