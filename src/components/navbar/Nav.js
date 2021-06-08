import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from './DrawerMenu';
import NavUtilities from './NavUtilities';
import AuthModal from './AuthModal';
import AppBar from '@material-ui/core/AppBar';

const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    flexGrow: 1
  },
  navBar: {
    backgroundColor: '#333333',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  navBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

class Nav extends React.Component {
  state = { term: '' };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          className={clsx(classes.navBar, {
            [classes.navBarShift]: this.props.drawerOpen
          })}
          position='static'
        >
          <NavUtilities />
        </AppBar>
        <Drawer />
        <AuthModal />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  drawerOpen: state.nav.drawerOpen
});

export default connect(
  mapStateToProps,
  {}
)(withStyles(useStyles)(Nav));
