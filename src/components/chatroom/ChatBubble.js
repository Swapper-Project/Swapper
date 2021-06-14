import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Gravatar from 'react-gravatar';
import Typography from '@material-ui/core/Typography';
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles((theme) => ({
  currentUserContainer: {
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  otherUserContainer: {
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    borderRadius: '12.5rem',
    width: '2rem',
    height: '2rem',
    margin: '0 0.5rem',
  },
  currentUserCard: {
    backgroundColor: theme.palette.white.main,
    padding: '0 0.2rem',
  },
  otherUserCard: {
    backgroundColor: theme.palette.primary.main,
    padding: '0 0.2rem',
  },
  systemCard: {
    textAlign: 'center',
    backgroundColor: theme.palette.offWhite.secondary,
    margin: '1rem',
    padding: '0.3rem',
  },
}));

const ChatBubble = ({ currentUser, text }) => {
  const classes = useStyles();
  console.log(currentUser);
  return (
    <div>
      {currentUser === true ? (
        <div className={classes.currentUserContainer}>
          <Card className={classes.currentUserCard}>{text}</Card>
          <Gravatar
            email="a-email@example.com"
            className={`${classes.avatar}`}
          />
        </div>
      ) : currentUser === false ? (
        <div className={classes.otherUserContainer}>
          <Gravatar
            email="a-email@example.com"
            className={`${classes.avatar}`}
          />
          <Card className={classes.otherUserCard}>{text}</Card>
        </div>
      ) : (
        <div>
          <Card className={classes.systemCard}>{text}</Card>
        </div>
      )}
    </div>
  );
};

export default withStyles(useStyles)(ChatBubble);
