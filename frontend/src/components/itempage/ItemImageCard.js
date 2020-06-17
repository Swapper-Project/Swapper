import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: 'grey',
    height: '100%'
  },
  image: {
    height: '90%',
    width: '90%',
    margin: 5
  },
  conversationButton: {
    width: '90%',
    backgroundColor: '#FF5722',
    margin: 5,
    '&:hover': {
      backgroundColor: 'white'
    }
  },
  interestSwap: {
    width: '90%',
    margin: 5
  }
}));

const ItemImageCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
  );
};

export default ItemImageCard;
