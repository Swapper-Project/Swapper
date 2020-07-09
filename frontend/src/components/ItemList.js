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

  componentDidUpdate(prevProps) {
    if(prevProps.term !== this.props.term)
      this.props.getPosts();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className="container-flexbox-ItemList">
          {this.props.posts.map((post, key) => {
            return <ItemCard key={key} post={post} />
          })}
        
        </div>
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
});

export default connect(
  mapStateToProps,
  { getPosts }
)(withStyles(useStyles)(ItemList));