import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: 'grey',
    height: 430
  },
  image: {
    height: 300,
    width: 350,
    margin: 5
  },
  conversationButton: {
    width: 350,
    backgroundColor: '#FF5722',
    margin: 5,
    '&:hover': {
      backgroundColor: 'white'
    }
  },
  interestSwap: {
    margin: 5
  }
}));

const ItemImageCard = () => {
  const classes = useStyles();

  return (
    // <Paper className={classes.paper}>
    <div>
      <img
        className={classes.image}
        src='https://cdn.mos.cms.futurecdn.net/iGoyV8755hauMhq55pVC2J.jpg'
        alt='Logo'
      />
      <br />
      <Typography className={classes.interestSwap} variant='h6'>
        Interested in Swapping for this item?
      </Typography>
      <Button className={classes.conversationButton}>
        Start a Conversation
      </Button>
    </div>

    // </Paper>
  );
};

export default ItemImageCard;
