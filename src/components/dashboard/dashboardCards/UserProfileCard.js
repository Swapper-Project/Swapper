import React from 'react';
import Gravatar from 'react-gravatar';
import Ratings from 'react-ratings-declarative';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '22rem',
    maxWidth: '100%',
    flexGrow: 1,
    marginTop: '2rem',
    marginBottom: '2rem',
    marginRight: '1.5rem',
    minHeight: '22rem',
    backgroundColor: theme.palette.offWhite.main,
  },
  avatar: {
    paddingTop: '1rem',
    marginTop: '-3rem',
    borderRadius: '12.5rem',
    width: '12.5rem',
    height: '12.5rem',
  },
  username: {
    paddingTop: '1rem',
    paddingBottom: 3,
    fontWeight: 'bold',
  },
  rating: {
    paddingLeft: 3,
    fontWeight: 'bold',
  },
}));

const UserProfileCard = ({ username, email, userRating, totalRating }) => {
  const classes = useStyles();

  /*fetch actual user rating from hook for given card later*/

  const [rating, setRating] = React.useState(userRating);

  return (
    <Card className={classes.root} elevation={6}>
      <div>
        <Gravatar email={email} className={`${classes.avatar}`} />
      </div>
      <Typography variant="h5" className={classes.username}>
        {username}
      </Typography>
      <div>
        <Ratings rating={rating} widgetDimensions="30px" widgetSpacings="0px">
          <Ratings.Widget widgetRatedColor="#FF5722" />
          <Ratings.Widget widgetRatedColor="#FF5722" />
          <Ratings.Widget widgetRatedColor="#FF5722" />
          <Ratings.Widget widgetRatedColor="#FF5722" />
          <Ratings.Widget widgetRatedColor="#FF5722" />
        </Ratings>
        <span className={classes.rating}>({totalRating})</span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  username: state.user.username,
  rating: state.user.rating,
  email: state.user.email,
  totalRating: state.user.totalRating,
});

export default connect(mapStateToProps)(UserProfileCard);
