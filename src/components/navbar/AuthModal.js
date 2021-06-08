import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fade, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { authModalClose } from '../../redux/actions/authActions';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AuthTabs from './AuthTabs';
import Paper from '@material-ui/core/Paper';

const useStyles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    width: '40%',
    minWidth: 300,
    backgroundColor: '#333333',
    padding: theme.spacing(2, 4, 3)
  },
  modalTitle: {
    color: 'white'
  }
});

class AuthModal extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Modal
          className={classes.modal}
          open={this.props.modalOpen}
          onClose={() => this.props.authModalClose()}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={this.props.modalOpen}>
            <Paper square={false} className={classes.paper}>
              <Typography
                style={{ fontFamily: 'Roboto Mono' }}
                className={classes.modalTitle}
                align='center'
                variant='h4'
              >
                Welcome to Swapper!
              </Typography>
              <br />
              <AuthTabs selectedTab={0} />
            </Paper>
          </Fade>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalOpen: state.auth.authOpen
});

export default connect(
  mapStateToProps,
  { authModalClose }
)(withStyles(useStyles)(AuthModal));
