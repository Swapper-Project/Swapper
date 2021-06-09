import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Gravatar from 'react-gravatar';
import Ratings from 'react-ratings-declarative';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: '100%',
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
  },
  avatar: {
    borderRadius: 200,
    width: 30,
    height: 30,
  },
  userDiv: {
    display: 'flex',
    float: 'left',
    minWidth: 300,
  },
  username: {
    marginLeft: 10,
    marginRight: 5,
  },
  ratingDiv: {
    marginTop: 5,
    display: 'flex',
    float: 'left',
  },
  description: {
    marginTop: 20,
  },
  eyeIcon: {
    marginRight: 5,
  },
  viewed: {
    display: 'flex',
    float: 'left',
    marginTop: 25,
  },
}));

const ItemDetails = ({ post }) => {
  const classes = useStyles();
  const [user, setUser] = useState('');
  const [rating, setRating] = useState(0);
  const [completedSwaps, setCompletedSwaps] = useState(0);

  useEffect(() => {
    axios
      .post(`http://localhost:4002/api/getPosterInfo`, {
        userId: post.userId,
      })
      .then((res) => {
        setRating(res.data.rating);
        setUser(res.data.username);
        setCompletedSwaps(res.data.completedSwaps);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className={classes.root}>
      <Typography variant="h4">{post.title}</Typography>
      <br />
      <div className={classes.userDiv}>
        <Gravatar email="a-email@example.com" className={`${classes.avatar}`} />
        <Typography className={classes.username} variant="h6">
          {user}
        </Typography>
        <div className={classes.ratingDiv}>
          <Ratings rating={rating} widgetDimensions="20px" widgetSpacings="0px">
            <Ratings.Widget widgetRatedColor="#FF5722" />
            <Ratings.Widget widgetRatedColor="#FF5722" />
            <Ratings.Widget widgetRatedColor="#FF5722" />
            <Ratings.Widget widgetRatedColor="#FF5722" />
            <Ratings.Widget widgetRatedColor="#FF5722" />
          </Ratings>
          <Typography>({Math.floor(rating * completedSwaps)})</Typography>
        </div>
      </div>
      <Typography variant="h6">Category: {post.category}</Typography>
      <div className={classes.description}>
        <Typography>Description:</Typography>
        <Typography>{post.description}</Typography>
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

const mapStateToProps = (state) => ({
  post: state.posts.currentPost,
});

export default connect(mapStateToProps)(ItemDetails);
