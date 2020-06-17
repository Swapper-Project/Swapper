import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Gravatar from 'react-gravatar';
import Ratings from 'react-ratings-declarative';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: '100%',
    width: '100%'
  },
  paper: {
    padding: theme.spacing(2)
  },
  avatar: {
    borderRadius: 200,
    width: 30,
    height: 30
  },
  userDiv: {
    display: 'flex',
    float: 'left',
    minWidth: 300
  },
  username: {
    marginLeft: 10,
    marginRight: 5
  },
  ratingDiv: {
    marginTop: 5,
    display: 'flex',
    float: 'left'
  },
  description: {
    marginTop: 20
  },
  eyeIcon: {
    marginRight: 5
  },
  viewed: {
    display: 'flex',
    float: 'left',
    marginTop: 25
  }
}));

const ItemDetails = () => {
  const classes = useStyles();
  const [rating, setRating] = React.useState(0.5);

  return (
    <div className={classes.root}>
      <Typography variant='h4'>Xbox Series X</Typography>
      <div className={classes.userDiv}>
        <Gravatar email='a-email@example.com' className={`${classes.avatar}`} />
        <Typography className={classes.username} variant='h6'>
          Chunkysmalls
        </Typography>
        <div className={classes.ratingDiv}>
          <Ratings rating={rating} widgetDimensions='20px' widgetSpacings='0px'>
            <Ratings.Widget widgetRatedColor='#FF5722' />
            <Ratings.Widget widgetRatedColor='#FF5722' />
            <Ratings.Widget widgetRatedColor='#FF5722' />
            <Ratings.Widget widgetRatedColor='#FF5722' />
            <Ratings.Widget widgetRatedColor='#FF5722' />
          </Ratings>
          <Typography>(69)</Typography>
        </div>
      </div>
      <Typography variant='h6'>Category: Electronics</Typography>
      <div className={classes.description}>
        <Typography>Description:</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum
          nibh, congue in venenatis eu, semper in augue. Morbi varius elit orci,
          eu auctor nunc pretium eu. Duis sed luctus dolor, in pretium arcu. In
          efficitur eros sit amet diam vehicula, vel vestibulum lacus venenatis.
          Vivamus a pellentesque magna. Nunc rutrum bibendum nibh eu efficitur.
          Aenean ac nibh eget tortor volutpat ultricies. Aenean at pretium
          lacus. Aenean pretium quam id magna aliquam, sollicitudin efficitur
          orci auctor. Curabitur faucibus lacus ut dictum lacinia. Nulla
          facilisi.
        </Typography>
      </div>
      <div className={classes.viewed}>
        <VisibilityIcon
          className={classes.eyeIcon}
          style={{ color: '#FF5722' }}
        />
        <Typography>Viewed 100 Times</Typography>
      </div>
    </div>
  );
};

export default ItemDetails;
