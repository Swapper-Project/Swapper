import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
  root: {
    position: 'relative',
    maxWidth: '100%',
    minWidth: 250,
    padding: 20,
    backgroundColor: '#f5f5f5',
    margin: 5,
    textAlign: 'center',
    verticalAlign: 'text-bottom'
  },
  totalPostsTitle: {
    width: '100%'
  },
  totalValue: {
    color: '#FF5722'
  }
});

class ListedSwapHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Typography className={classes.totalPostsTitle} variant='h5'>
            You have a total of &nbsp;
            <Typography
              component='span'
              className={classes.totalValue}
              variant='h5'
            >
              20
            </Typography>
            &nbsp; listed swaps!
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles)(ListedSwapHeader);
