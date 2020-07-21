import React, { Component } from 'react';
import { getUserPosts } from '../../redux/actions/postActions';
import ItemCard from '../ItemCard';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2)
    }
  }
});

class ItemList extends Component {
  state = {
    deleteId: []
  };

  componentDidMount() {
    this.props.getUserPosts();
    this.setState({
      deleteId: []
    });
  }

  handleDeleteId = postId => {
    this.setState({
      deleteId: [...this.state.deleteId, postId]
    });
  };

  render() {
    const { classes } = this.props;

    const postsToRender = this.props.userPosts.map((post, key) => {
      if (!this.state.deleteId.includes(post.postId)) {
        return (
          <ItemCard
            key={key}
            post={post}
            handleDeleteId={this.handleDeleteId}
            listedSwaps={true}
          />
        );
      }
    });

    return (
      <div className={classes.root}>
        <div className='container-flexbox-ItemList'>{postsToRender}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userPosts: state.posts.userPosts
});

export default connect(
  mapStateToProps,
  { getUserPosts }
)(withStyles(useStyles)(ItemList));
