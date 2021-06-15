import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import CategoryIcon from '@material-ui/icons/Category';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import AccountActions from './AccountActions';
import { CenterFocusStrong } from '@material-ui/icons';
import { autofill } from 'redux-form';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '22rem',
    maxWidth: '60rem',
    flexGrow: 1,
    marginRigth: '1rem',
    marginTop: '2rem',
    minHeight: '25rem',
    marginBottom: '2rem',
    marginRight: '1.6rem',
    backgroundColor: theme.palette.offWhite.main,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: '1.5rem',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
  },
  content: {
    display: 'flex',
    float: 'left',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  contentContainer: {
    margin: '0.3rem',
    paddingLeft: '1.25rem',
    maxWidth: '100%',
    minWidth: '18.75rem',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  info: {
    paddingLeft: '0.3rem',
  },
  details: {
    width: '100%',
  },
  updateDetails: {
    alignSelf: 'flex-end',
    width: '25%',
  },
  statistics: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryIcon: {
    margin: '0.3rem',
  },
  chip: {
    margin: '0.3rem',
    color: 'white',
    backgroundColor: '#FF5722',
  },
  attrHeaderText: {
    fontWeight: 'bold',
    fontSize: '1.0em',
  },
  actionsDropdown: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0.5rem',
  },
}));

const UserDetailsCard = ({ email, interests, favoriteCategories }) => {
  const classes = useStyles();

  /*fetch actual user rating from hook for given card later*/

  // const [rating, setRating] = React.useState(3.5);
  return (
    <Card className={classes.root} elevation={6}>
      <div className={classes.details}>
        <div className={classes.headerContainer}>
          <Typography className={classes.header} variant="h4">
            Account Details
          </Typography>
          <div className={classes.actionsDropdown}>
            <AccountActions className={classes.actionsDropdown} />
          </div>
        </div>
        <Divider variant="middle" />
        <div className={classes.infoContainer}>
          <div className={classes.contentContainer}>
            <Typography className={classes.attrHeaderText} variant="overline">
              Email
            </Typography>
            <br />
            <div className={classes.content}>
              <MailOutlineIcon className={classes.icon} color="primary" />
              <Typography className={classes.info}>{email}</Typography>
            </div>
          </div>
          <div className={classes.contentContainer}>
            <Typography className={classes.attrHeaderText} variant="overline">
              Interests
            </Typography>
            <div className={classes.content}>
              <SentimentVerySatisfiedIcon color="primary" />
              <Typography className={classes.info}>
                {interests === '' ? ' N/A ' : interests}
              </Typography>
            </div>
          </div>
          <div className={classes.contentContainer}>
            <Typography className={classes.attrHeaderText} variant="overline">
              Favorite Categories
            </Typography>
            <br />
            <div className={classes.content}>
              <CategoryIcon color="primary" />
              {favoriteCategories.length === 0 ? (
                <Typography className={classes.info}> N/A </Typography>
              ) : (
                favoriteCategories.map((category) => (
                  <Chip
                    className={classes.chip}
                    key={category}
                    label={category}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  interests: state.user.interests,
  rating: state.user.rating,
  completedSwaps: state.user.completedSwaps,
  favoriteCategories: state.user.favoriteCategories,
});

export default connect(mapStateToProps)(UserDetailsCard);
