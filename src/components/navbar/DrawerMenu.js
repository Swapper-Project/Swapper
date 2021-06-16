import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  handleDrawerClose,
  setDashboardTab,
} from '../../redux/actions/navActions';
import { authModalOpen } from '../../redux/actions/authActions';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import DashBoard from '@material-ui/icons/Dashboard';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import WishIcon from '@material-ui/icons/LocalActivity';
import CompleteIcon from '@material-ui/icons/DoneOutline';
import ListedIcon from '@material-ui/icons/ListAlt';
import AllInboxIcon from '@material-ui/icons/AllInbox';

const drawerWidth = 240;

const useStyles = (theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#333333',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  iconColor: {
    color: '#FF5722',
  },
});

class DrawerMenu extends Component {
  tabRedirect = (value) => {
    this.props.setDashboardTab(value);
    this.props.history.push('/dashboard');
  };

  render() {
    const { classes } = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={this.props.drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => this.props.handleDrawerClose()}>
            <ChevronLeftIcon className={classes.iconColor} />
          </IconButton>
        </div>
        <Divider />
        {!this.props.isSignedIn && (
          <List>
            <ListItem
              button
              key={'Login'}
              onClick={() => this.props.authModalOpen(0)}
            >
              <ListItemIcon>
                <PersonIcon className={classes.iconColor} />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography style={{ color: '#FFFFFF' }}>Login</Typography>
                }
              />
            </ListItem>
            <ListItem
              button
              key={'Register'}
              onClick={() => this.props.authModalOpen(1)}
            >
              <ListItemIcon>
                <AddIcon className={classes.iconColor} />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography style={{ color: '#FFFFFF' }}>Register</Typography>
                }
              />
            </ListItem>
          </List>
        )}

        {this.props.isSignedIn && (
          <List>
            <ListItem
              onClick={() => this.tabRedirect(0)}
              button
              key={'Dashboard'}
            >
              <ListItemIcon>
                <DashBoard className={classes.iconColor} />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography style={{ color: '#FFFFFF' }}>
                    Dashboard
                  </Typography>
                }
              />
            </ListItem>
            <Divider />
            <ListItem onClick={() => this.tabRedirect(0)} button>
              <ListItemIcon className={classes.iconColor}>
                <WishIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography style={{ color: '#FFFFFF' }}>Wishlist</Typography>
                }
              />
            </ListItem>
            <ListItem onClick={() => this.tabRedirect(1)} button>
              <ListItemIcon className={classes.iconColor}>
                <CompleteIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography style={{ color: '#FFFFFF' }}>
                    Completed Swaps
                  </Typography>
                }
              />
            </ListItem>
            <ListItem onClick={() => this.tabRedirect(2)} button>
              <ListItemIcon className={classes.iconColor}>
                <ListedIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography style={{ color: '#FFFFFF' }}>
                    ListedSwaps
                  </Typography>
                }
              />
            </ListItem>
            <ListItem onClick={() => this.tabRedirect(3)} button>
              <ListItemIcon className={classes.iconColor}>
                <AllInboxIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography style={{ color: '#FFFFFF' }}>Inbox</Typography>
                }
              />
            </ListItem>
          </List>
        )}
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
  drawerOpen: state.nav.drawerOpen,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    handleDrawerClose,
    authModalOpen,
    setDashboardTab,
  })
)(withStyles(useStyles)(DrawerMenu));
