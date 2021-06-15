import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'grid',
    padding: '1rem',
    gridTemplateColumns: 'repeat(4, 1fr)',
    backgroundColor: theme.palette.offWhite.secondary,
    margin: '1rem',
  },
  columnTitle: {
    color: theme.palette.primary.main,
  },
}));

const InboxHeader = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.header}>
      <Typography className={classes.columnTitle} variant="h5">
        User
      </Typography>
      <Typography className={classes.columnTitle} variant="h5">
        Item
      </Typography>
      <Typography className={classes.columnTitle} variant="h5">
        Last Message Time
      </Typography>
      <Typography className={classes.columnTitle} variant="h5">
        Contents
      </Typography>
    </Paper>
  );
};

export default withStyles(useStyles)(InboxHeader);
