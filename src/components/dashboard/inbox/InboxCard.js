import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: '1rem',
    backgroundColor: theme.palette.offWhite.secondary,
  },

  actionArea: {
    display: 'grid',
    padding: '1rem',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

const InboxCard = () => {
  const classes = useStyles();
  const history = useHistory();

  const toChatroom = () => {
    history.push('/chatroom');
  };

  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={() => toChatroom()}
        className={classes.actionArea}
      >
        <Typography className={classes.columnTitle}>TheDudeRino25</Typography>
        <Typography className={classes.columnTitle}>Xbox</Typography>
        <Typography className={classes.columnTitle}>6/14/2021</Typography>
        <Typography className={classes.columnTitle}>Unread Messages</Typography>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(useStyles)(InboxCard);
