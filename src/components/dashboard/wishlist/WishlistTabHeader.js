import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  updateWishlist,
  getUserData,
} from '../../../redux/actions/userActions';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import WishlistModal from './WishlistModal';

const useStyles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '100%',
    height: 50,
    paddingLeft: 20,
    paddingTop: 5,
    backgroundColor: '#f5f5f5',
    margin: 5,
  },
  priorityText: {
    minWidth: 150,
    fontSize: '1.0em',
  },
  itemNameText: {
    minWidth: 150,
    marginLeft: 45,
    fontSize: '1.0em',
  },
  buttonSpacing: {
    marginLeft: 'auto',
    marginRight: 15,
  },
  editButton: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    minWidth: 160,
    marginLeft: 35,
  },
  wishlistHeader: {
    minWidth: 600,
  },
});

class WishlistTabHeader extends Component {
  state = { wishlistModalOpen: false, wishlist: [] };

  componentDidMount() {
    this.setState({
      wishlist: this.props.wishlist,
    });
  }

  handleAddItem = (item) => {
    let wishlist = this.state.wishlist;
    wishlist.push(item);
    this.setState({
      wishlist: wishlist,
    });
    this.props.updateWishlist(this.state.wishlist, this.props.userId);
    this.props.getUserData(this.props.userId);
  };

  handleModalClose = () => {
    this.setState({
      wishlistModalOpen: false,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid className={classes.wishlistHeader}>
          <Card className={classes.root}>
            <Typography
              className={classes.priorityText}
              component="span"
              variant="overline"
            >
              <b>Priority</b>
            </Typography>
            <Typography
              className={classes.itemNameText}
              component="span"
              variant="overline"
            >
              <b>Wishlist Item</b>
            </Typography>
            <CardActions className={classes.buttonSpacing}>
              <Button
                className={classes.editButton}
                onClick={() => {
                  this.setState({
                    wishlistModalOpen: true,
                  });
                }}
              >
                Add Wishlist Item
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <WishlistModal
          wishlistModalOpen={this.state.wishlistModalOpen}
          handleModalClose={this.handleModalClose}
          handleAddItem={this.handleAddItem}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  wishlist: state.user.wishlist,
  userId: state.auth.userId,
});

WishlistTabHeader = connect(mapStateToProps, { updateWishlist, getUserData })(
  WishlistTabHeader
);

export default withStyles(useStyles)(WishlistTabHeader);
