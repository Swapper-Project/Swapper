import React from 'react';
import { connect } from 'react-redux';
import AccountOptions from './AccountOptions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import StarsIcon from '@material-ui/icons/Stars';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CategoryIcon from '@material-ui/icons/Category';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    minWidth: 350,
    maxWidth: 800,
    flexGrow: 1,
    marginRight: '5%',
    marginTop: 35,
    minHeight: 325,
    marginLeft: '5%',
    marginBottom: 30,
    backgroundColor: '#ededed'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  header: {
    paddingTop: 7,
    paddingLeft: 20,
    paddingRight: 20
  },
  content: {
    display: 'flex',
    float: 'left'
  },
  contentContainer: {
    margin: 5,
    paddingLeft: 20,
    maxWidth: 500,
    minWidth: 300
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  info: {
    paddingLeft: 5
  },
  details: {
    width: '100%'
  },
  updateDetails: {
    alignSelf: 'flex-end',
    width: '25%'
  },
  statistics: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  chip: {
    marginLeft: 5,
    color: 'white',
    backgroundColor: '#FF5722'
  }
});

const UserDetailsCard = ({
  email,
  interests,
  userRating,
  completedSwaps,
  favoriteCategories
}) => {
  const classes = useStyles();

  {
    /*fetch actual user rating from hook for given card later*/
  }
  const [rating, setRating] = React.useState(3.5);
  return (
    <Card className={classes.root} className={classes.root} elevation={6}>
      <div className={classes.details}>
        <div className={classes.headerContainer}>
          <Typography className={classes.header} variant='h4'>
            Account Details
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            <AccountOptions />
          </div>
        </div>
        <Divider variant='middle' />
        <div className={classes.infoContainer}>
          <div className={classes.contentContainer}>
            <Typography variant='h6'>Email</Typography>
            <div className={classes.content}>
              <MailOutlineIcon className={classes.icon} color='primary' />
              <Typography className={classes.info}>{email}</Typography>
            </div>
          </div>
          <div className={classes.contentContainer}>
            <Typography variant='h6'>Interests</Typography>
            <div className={classes.content}>
              <SentimentVerySatisfiedIcon color='primary' />
              <Typography className={classes.info}>
                {interests === '' ? ' N/A ' : interests}
              </Typography>
            </div>
          </div>
          <div className={classes.contentContainer}>
            <Typography variant='h6'>Favorite Categories</Typography>
            <div className={classes.content}>
              <CategoryIcon color='primary' />
              {favoriteCategories.length === 0 ? (
                <Typography className={classes.info}> N/A </Typography>
              ) : (
                favoriteCategories.map(category => (
                  <Chip
                    className={classes.chip}
                    key={category}
                    label={category}
                  />
                ))
              )}
            </div>
          </div>
          <Typography className={classes.header} variant='h4'>
            Statistics
          </Typography>
          <Divider variant='middle' />
          <div className={classes.statistics}>
            <div className={classes.contentContainer}>
              <Typography variant='h6'>Average Rating</Typography>
              <div className={classes.content}>
                <StarsIcon color='primary' />
                <Typography className={classes.info}>0.69</Typography>
              </div>
            </div>
            <div className={classes.contentContainer}>
              <Typography variant='h6'>Completed Swaps</Typography>
              <div className={classes.content}>
                <CheckBoxIcon color='primary' />
                <Typography className={classes.info}>
                  {completedSwaps}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const mapStateToProps = state => ({
  email: state.user.email,
  interests: state.user.interests,
  rating: state.user.rating,
  completedSwaps: state.user.completedSwaps,
  favoriteCategories: state.user.favoriteCategories
});

export default connect(mapStateToProps)(UserDetailsCard);
