import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  getUserData,
  updateWishlist,
} from '../../../redux/actions/userActions';
import WishlistTabRow from './WishlistTabRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = (theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  wishlist: {
    minWidth: 600,
  },
});

class WishlistTabList extends Component {
  state = {
    wishlist: [],
  };

  componentDidMount() {
    this.setState({
      wishlist: this.props.wishlist,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.wishlist.length !== this.props.wishlist.length) {
      this.props.getUserData(this.props.userId);
    }
  }

  handleDeleteItem = (index) => {
    let wishlist = this.state.wishlist;
    wishlist.splice(index, 1);
    this.setState({
      wishlist: wishlist,
    });
    this.props.updateWishlist(this.state.wishlist, this.props.userId);
    this.props.getUserData(this.props.userId);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          className={classes.wishlist}
          direction="column"
          justify="space-evenly"
        >
          {this.state.wishlist.length > 0 ? (
            this.state.wishlist.map((item, index) => {
              return (
                <Grid key={index} item>
                  <WishlistTabRow
                    priorityLevel={item.level}
                    itemName={item.name}
                    index={index}
                    handleDeleteItem={this.handleDeleteItem}
                  />
                </Grid>
              );
            })
          ) : (
            <Typography>No items in wishlist</Typography>
          )}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wishlist: state.user.wishlist,
  userId: state.auth.userId,
});

export default connect(mapStateToProps, { getUserData, updateWishlist })(
  withStyles(useStyles)(WishlistTabList)
);
