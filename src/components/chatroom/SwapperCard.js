import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Gravatar from 'react-gravatar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.white.main,
    padding: '0.5rem',
    margin: '1rem 0',
  },
  swapperInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: '12.5rem',
    width: '1.5rem',
    height: '1.5rem',
  },
  username: {
    margin: '0 0.5rem',
  },
}));

const SwapperCard = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.card}>
      <div className={classes.swapperInfo}>
        <Gravatar email="a-email@example.com" className={`${classes.avatar}`} />
        <Typography className={classes.username} variant="h6">
          theDuderino25
        </Typography>
      </div>
    </Paper>
  );
};

export default withStyles(useStyles)(SwapperCard);
