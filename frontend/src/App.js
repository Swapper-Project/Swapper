import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import NotFound from './components/NotFound.js';
import Nav from './components/navbar/Nav';
import Dashboard from './components/dashboard/Dashboard.js';
import ItemPage from './components/itempage/ItemPage';
import ItemList from './components/ItemList.js';
import ChatRoom from './components/ChatRoom.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className='page-container'>
        <div className='content-wrap'>
          <Nav />
          <Switch>
            <Route exact path='/' component={ItemList} />
            <Route path='/dashboard' component={Dashboard} />
            {/* /listing/?id=N* for individual item page */}
            <Route path='/listing' component={ItemPage} />
            <Route path='/ChatRoom' component={ChatRoom} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
