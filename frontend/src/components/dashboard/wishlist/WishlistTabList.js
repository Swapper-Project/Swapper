import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import WishlistTabRow from './WishlistTabRow';

const useStyles = theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2)
    }
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
        <div>
          <WishlistTabRow />
          <WishlistTabRow />
          <WishlistTabRow />
          <WishlistTabRow />
          <WishlistTabRow />
          <WishlistTabRow />
          <WishlistTabRow />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//  //
// });

export default connect(
  null,
)(withStyles(useStyles)(WishlistTabList));
