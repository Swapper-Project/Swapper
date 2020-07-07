import React from 'react';
import { fade, withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  handleDrawerOpen,
  handleDrawerClose
} from '../../redux/actions/navActions';
import {
  authModalOpen,
  authModalClose,
  signOut
} from '../../redux/actions/authActions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchIcon from '@material-ui/icons/Search';
import DashBoard from '@material-ui/icons/Dashboard';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import InputBase from '@material-ui/core/InputBase';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FullWidthTabs from './AuthTabs';
import Paper from '@material-ui/core/Paper';
import WishIcon from '@material-ui/icons/LocalActivity';
import CompleteIcon from '@material-ui/icons/DoneOutline';
import ListedIcon from '@material-ui/icons/ListAlt';
import AllInboxIcon from '@material-ui/icons/AllInbox';

const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#FF5722'
  },
  title: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  linkTitle: {
    textDecoration: 'none',
    color: 'white'
  },
  navBar: {
    backgroundColor: '#333333'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#333333'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  iconColor: {
    color: '#FF5722'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navContents: {
    display: 'flex',
    flexDirection: 'row'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: '#333333',
    padding: theme.spacing(2, 4, 3)
  },
  modalTitle: {
    color: 'white'
  }
});

class Nav extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.navBar} position='static'>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              onClick={() => this.props.handleDrawerOpen()}
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase 
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.title}>
              <Link to={'/'} className={classes.linkTitle}>
                <Typography style={{fontFamily: 'Roboto Mono' }} variant='h6'>Swapper</Typography>
              </Link>
            </div>
            <div>
              {this.props.isSignedIn && (
                <Button onClick={() => this.props.signOut()} color='inherit'>
                  Logout
                </Button>
              )}
              {!this.props.isSignedIn && (
                <Button style={{fontFamily: 'Roboto Mono' }}
                  onClick={() => this.props.authModalOpen()}
                  color='inherit'
                >
                  Login / Register
                </Button>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={this.props.drawerOpen}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => this.props.handleDrawerClose()}>
              <ChevronLeftIcon className={classes.iconColor} />
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
              <ListItem button key={'Dashboard'}>
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
            </Link>
            <Divider />
            <ListItem button>
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
            <ListItem button>
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
            <ListItem button>
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
            <ListItem button>
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
        </Drawer>
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
                style={{fontFamily: 'Roboto Mono'}}
                className={classes.modalTitle}
                align='center'
                variant='h4'
              >
                Welcome to Swapper!
              </Typography>
              <br />
              <FullWidthTabs />
            </Paper>
          </Fade>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
  userId: state.auth.userId,
  modalOpen: state.auth.authOpen,
  drawerOpen: state.nav.drawerOpen
});

export default connect(
  mapStateToProps,
  {
    authModalOpen,
    authModalClose,
    handleDrawerOpen,
    handleDrawerClose,
    signOut
  }
)(withStyles(useStyles)(Nav));
