import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import WishlistTabRow from './WishlistTabRow';
import Grid from '@material-ui/core/Grid';

const useStyles = theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2)
    }
  },
  wishlist: {
    minWidth: 600
  }
});

class WishlistTabList extends Component {
  state = {
    wishlistItems: []
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          className={classes.wishlist}
          direction='column'
          justify='space-evenly'
        >
          <Grid item>
            <WishlistTabRow />
          </Grid>
          <Grid item>
            <WishlistTabRow />
          </Grid>
          <Grid item>
            <WishlistTabRow />
          </Grid>
          <Grid item>
            <WishlistTabRow />
          </Grid>
          <Grid item>
            <WishlistTabRow />
          </Grid>
          <Grid item>
            <WishlistTabRow />
          </Grid>
          <Grid item>
            <WishlistTabRow />
          </Grid>
        </Grid>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//  //
// });

export default connect(null)(withStyles(useStyles)(WishlistTabList));
