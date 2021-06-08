import React from 'react';
import { connect } from 'react-redux';
import { setDashboardTab } from '../../redux/actions/navActions';
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
import WishlistTabList from './wishlist/WishlistTabList';
import WishlistHeader from './wishlist/WishlistTabHeader';
import ListedSwapsHeader from './ListedSwaps/ListedSwapsHeader';
import ListedSwapsList from './ListedSwaps/ListedSwapsList';

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
    minWidth: 460,
    backgroundColor: theme.palette.background.paper
  },
  tabPanel: {
    backgroundColor: '#ededed',
    paddingLeft: 0,
    marginTop: 6,
    maxHeight: '50vh',
    overflowX: 'auto'
  }
}));

const DashBoardTabs = props => {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    props.setDashboardTab(newValue);
  };

  return (
    <div className={classes.root}>
      <Box mt={5} boxShadow={2}>
        <AppBar position='static' color='default'>
          <Tabs
            value={props.selectedTab}
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
        <TabPanel
          value={props.selectedTab}
          index={0}
          className={classes.tabPanel}
        >
          <WishlistHeader />
          <WishlistTabList />
        </TabPanel>
        <TabPanel
          value={props.selectedTab}
          index={1}
          className={classes.tabPanel}
        ></TabPanel>
        <TabPanel
          value={props.selectedTab}
          index={2}
          className={classes.tabPanel}
        >
          <ListedSwapsHeader />
          <ListedSwapsList />
        </TabPanel>
        <TabPanel
          value={props.selectedTab}
          index={3}
          className={classes.tabPanel}
        ></TabPanel>
      </Box>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedTab: state.nav.selectedTab
});

export default connect(
  mapStateToProps,
  { setDashboardTab }
)(DashBoardTabs);
