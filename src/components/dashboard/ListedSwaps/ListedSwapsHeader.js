import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserPosts } from '../../../redux/actions/postActions';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = (theme) => ({
  root: {
    position: 'relative',
    maxWidth: '100%',
    minWidth: '15.6rem',
    padding: '1.25rem',
    backgroundColor: theme.palette.offWhite.secondary,
    margin: '0.3rem',
    textAlign: 'center',
    verticalAlign: 'text-bottom',
  },
  totalPostsTitle: {
    width: '100%',
  },
  totalValue: {
    color: theme.palette.primary.main,
  },
});

class ListedSwapHeader extends Component {
  componentDidMount() {
    this.props.getUserPosts();
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.userPosts !== this.props.userPosts) {
    //   console.log('UPDATE');
    //   this.props.getUserPosts();
    // }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Typography className={classes.totalPostsTitle} variant="h5">
            You have a total of &nbsp;
            <Typography
              component="span"
              className={classes.totalValue}
              variant="h5"
            >
              {this.props.userPosts.length}
            </Typography>
            &nbsp; listed swaps!
          </Typography>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userPosts: state.posts.userPosts,
});

export default connect(mapStateToProps, { getUserPosts })(
  withStyles(useStyles)(ListedSwapHeader)
);
