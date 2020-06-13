import React from 'react';
import {
  fade,
  makeStyles,
  useTheme,
  withStyles
} from '@material-ui/core/styles';
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
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';
import DashBoard from '@material-ui/icons/Dashboard';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import InputBase from '@material-ui/core/InputBase';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#ce881c'
  },
  title: {
    flexGrow: 1
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
    color: '#ce881c'
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
  textFieldInput: {
    color: 'white'
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
  textfield: {
    width: 500,
    margin: 5
  },
  loginButton: {
    width: 500,
    backgroundColor: '#ce881c',
    margin: 5
  }
}));

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
        borderColor: '#ce881c'
      },
      '&:hover fieldset': {
        borderColor: 'white'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ce881c'
      }
    },
    color: '#FFFFFF'
  }
})(TextField);

const WhiteTypography = withStyles({
  root: {
    color: 'white'
  }
})(Typography);

export default function Nav() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            onClick={handleDrawerOpen}
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
          <WhiteTypography variant='h6' className={classes.title}>
            Swapper
          </WhiteTypography>
          <Button onClick={handleOpen} color='inherit'>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon className={classes.iconColor} />
            ) : (
              <ChevronRightIcon className={classes.iconColor} />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key={'Dashboard'}>
            <ListItemIcon>
              <DashBoard className={classes.iconColor} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography style={{ color: '#FFFFFF' }}>Dashboard</Typography>
              }
            />
          </ListItem>
        </List>
      </Drawer>
      <Modal
        className={classes.modal}
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={modalOpen}>
          <div className={classes.paper}>
            <WhiteTypography variant='h4' align='center'>
              Sign In
            </WhiteTypography>
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
            <Button variant='contained' className={classes.loginButton}>
              Login
            </Button>
            <br />
            <Link
              component='button'
              variant='body1'
              style={{ color: '#ce881c' }}
            >
              Forgot your password?
            </Link>
            <br />
            <WhiteTypography variant='body1'>
              Not a member?
              <Link
                component='button'
                variant='body1'
                style={{ marginLeft: 5, color: '#ce881c' }}
              >
                Register
              </Link>
            </WhiteTypography>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
