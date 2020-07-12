import React, { Component } from 'react';
import ItemCard from './ItemCard';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { getPosts } from '../redux/actions/postActions';

const useStyles = theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },  
});

class ItemList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  componentDidUpdate(prevProps, prevState) {
      if(prevProps.cateogry !== this.props.cateogry || prevProps.term !== this.props.term)
        this.props.getPosts()
  }

  render() {
    const { classes } = this.props;

    const postsToRender = this.props.posts.map((post, key) => {
      return <ItemCard key={key} post={post} />
    });

    return (
      <div className={classes.root}>
        <div className="container-flexbox-ItemList">{postsToRender}</div>
        <div className="pagination-container">
          <Pagination count={10} color="primary" showFirstButton showLastButton />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  term: state.posts.term,
  cateogry: state.posts.category,
});

export default connect(
  mapStateToProps,
  { getPosts }
)(withStyles(useStyles)(ItemList));