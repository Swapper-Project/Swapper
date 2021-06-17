import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getUserData } from '../../../redux/actions/userActions';
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
    if (prevProps.wishlist !== this.props.wishlist) {
      console.log(update);
      this.setState({
        wishlist: this.props.wishlist,
      });
    }
  }

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

export default connect(mapStateToProps, { getUserData })(
  withStyles(useStyles)(WishlistTabList)
);
