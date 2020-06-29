import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from './Login';
import Register from './Register';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#333333'
  },
  appBar: {
    backgroundColor: '#333333'
  },
  tabPanel: {
    height: 600
  },
  indicator: {
    backgroundColor: '#FF5722'
  }
}));

const AuthTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
          variant='fullWidth'
          centered
          classes={{
            indicator: classes.indicator
          }}
        >
          <Tab label='Sign In' {...a11yProps(0)} />
          <Tab label='Register' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.tabPanel} value={value} index={0}>
        <Login />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={1}>
        <Register />
      </TabPanel>
    </div>
  );
};

export default AuthTabs;
