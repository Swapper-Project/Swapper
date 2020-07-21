import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CompleteIcon from '@material-ui/icons/DoneOutline';
import ListedIcon from '@material-ui/icons/ListAlt';
import WishIcon from '@material-ui/icons/LocalActivity';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import DashboardTabHeader from './DashboardTabHeader.js';
import DashboardTabRow from './DashboardTabRow.js';

import ListedSwapsHeader from './ListedSwapsHeader';
import ListedSwapsList from './ListedSwapsList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '90%',
    maxWidth: '100%',
    minWidth: 350,
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: theme.palette.background.paper,
    minHeight: 500
  },
  tabPanel: {
    backgroundColor: '#ededed',
    paddingLeft: 0,
    marginTop: 6,
    maxHeight: '50vh',
    overflowX: 'auto'
  }
}));

const DashBoardTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box mt={5} boxShadow={2}>
        <AppBar position='static' color='default'>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons='on'
            indicatorColor='primary'
            textColor='primary'
          >
            <Tab label='Wishlist' icon={<WishIcon />} {...a11yProps(0)} />
            <Tab
              label='Completed Swaps'
              icon={<CompleteIcon />}
              {...a11yProps(1)}
            />
            <Tab label='Listed Swaps' icon={<ListedIcon />} {...a11yProps(2)} />
            <Tab label='Inbox' icon={<AllInboxIcon />} {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className={classes.tabPanel}>
          <DashboardTabHeader />
          <DashboardTabRow />
          <DashboardTabRow />
          <DashboardTabRow />
          <DashboardTabRow />
          <DashboardTabRow />
          <DashboardTabRow />
          <DashboardTabRow />
          <DashboardTabRow />
          <DashboardTabRow />
          <DashboardTabRow />
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabPanel}>
          <DashboardTabHeader />
          <DashboardTabRow />
          <DashboardTabRow />
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabPanel}>
          <ListedSwapsHeader />
          <ListedSwapsList />
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.tabPanel}>
          <DashboardTabHeader />
          <DashboardTabRow />
          <DashboardTabRow />
          <DashboardTabRow />
          <DashboardTabRow />
          <DashboardTabRow />
        </TabPanel>
      </Box>
    </div>
  );
};

export default DashBoardTabs;
