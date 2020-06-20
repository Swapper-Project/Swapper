import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import clsx from 'clsx';
import './App.css';
import NotFound from './components/NotFound.js';
import Nav from './components/navbar/Nav';
import Dashboard from './components/dashboard/Dashboard.js';
import ItemPage from './components/itempage/ItemPage';
import ItemList from './components/ItemList.js';
import ChatRoom from './components/chatroom/ChatRoom.js';
import Footer from './components/Footer.js';
import Backdrop from '@material-ui/core/Backdrop';

const drawerWidth = 240;

const useStyles = theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'grey'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0
  },
  contentShift: {
    backdropFilter: 'blur(10px)',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: drawerWidth
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
  }

  handleDrawerOpen = () => {
    this.setState({
      drawerOpen: true
    });
  };

  handleDrawerClose = () => {
    this.setState({
      drawerOpen: false
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className='page-container'>
        <div className='content-wrap'>
          <Nav
            handleDrawerOpen={this.handleDrawerOpen}
            handleDrawerClose={this.handleDrawerClose}
            drawerOpen={this.state.drawerOpen}
          />
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: this.state.drawerOpen
            })}
          >
            <Backdrop
              className={classes.backdrop}
              open={this.state.drawerOpen}
            ></Backdrop>
            <Switch>
              <Route exact path='/' component={ItemList} />
              <Route path='/dashboard' component={Dashboard} />
              {/* /listing/?id=N* for individual item page */}
              <Route path='/listing' component={ItemPage} />
              <Route path='/ChatRoom' component={ChatRoom} />
              <Route path='*' component={NotFound} />
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
