import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';
import 'fontsource-roboto';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import history from './history';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF5722',
    },
    secondary: {
      main: '#333333',
    },
    test: {
      main: '#ededed',
    },
  },
  typography: {
    // fontSize: '62.5%',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
