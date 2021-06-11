import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import WishItemForm from './WishItemForm';
import Divider from '@material-ui/core/Divider';

const useStyles = (theme) => ({
  root: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '60%',
    minWidth: '19rem',
    backgroundColor: theme.palette.offWhite.main,
  },
  title: {
    textAlign: 'center',
  },
});

class WishItemPage extends Component {
  componentDidUpdate() {
    if (!this.props.isSignedIn) {
      this.props.history.push('/');
    }
  }

  onSubmit = (formVals) => {
    this.props.createSwap(formVals).then(() => {
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
          <Typography className={classes.title} variant="h4">
            Add an item to your wishlist
          </Typography>
          <Divider variant="middle" />
          <WishItemForm />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
  userId: state.auth.userId,
});

WishItemPage = withStyles(useStyles)(WishItemPage);

export default compose(withRouter, connect(mapStateToProps))(WishItemPage);
