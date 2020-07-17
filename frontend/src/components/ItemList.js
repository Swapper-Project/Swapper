import React, { Component } from 'react';
import ItemCard from './ItemCard';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { getPosts } from '../redux/actions/postActions';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },  
});

class ItemList extends Component {
  state = { 
    selectedPage: 1, 
    postsPerPage: 4,
    startIndex: 0,
    endIndex: 0
  }

  componentDidMount() {
    this.props.getPosts();
    var end = this.state.postsPerPage;
    this.setState({ endIndex: end })
  }

  handlePaginationChange = (page) => {
    this.setState({selectedPage: page});
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.category !== this.props.category || prevProps.term !== this.props.term) {
      this.props.getPosts()
      this.setState({selectedPage: 1})
    }
    if(prevState.selectedPage != this.state.selectedPage) {
      var start = (this.state.selectedPage - 1) * this.state.postsPerPage;
      var end = this.state.selectedPage * this.state.postsPerPage;
      this.setState({ startIndex: start, endIndex: end })
    }
  }

  render() {
    const { classes } = this.props;

    const postsToRender = this.props.posts.slice(this.state.startIndex, this.state.endIndex).map((post, key) => {
      return <ItemCard key={key} post={post} />
    });

    return (
      <div className={classes.root}>
        {this.props.posts.length == 1 && (
          <Typography variant="h6" color="textSecondary" display="inline">Showing 1 result.</Typography>
        )}
        {this.props.posts.length > 1 && (
          <Typography 
            variant="h6" 
            color="textSecondary" 
            display="inline"
          >Showing results {this.state.startIndex + 1}-{Math.min(this.state.endIndex,this.props.posts.length)} of {this.props.posts.length}.
          </Typography>
        )}
        <div className="container-flexbox-ItemList">{postsToRender}</div>
        <div className="pagination-container">
          {this.props.posts.length > this.state.postsPerPage && (
            <Pagination 
              count={(this.props.posts.length % this.state.postsPerPage == 0) 
                    ? Math.floor(this.props.posts.length / this.state.postsPerPage) 
                    : Math.floor(this.props.posts.length / this.state.postsPerPage) + 1} 
              page={this.state.selectedPage} 
              color="primary" 
              onChange={(e, page) => this.handlePaginationChange(page)} 
              showFirstButton 
              showLastButton 
            />
          )}
          {this.props.posts.length == 0 && (
            <Typography variant="h5" color="textSecondary" display="inline">No Swaps match the given search query. Please try modifying your search!</Typography>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  term: state.posts.term,
  category: state.posts.category,
});

export default connect(
  mapStateToProps,
  { getPosts }
)(withStyles(useStyles)(ItemList));