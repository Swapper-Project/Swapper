import React, { Component } from 'react';
import ItemCard from './ItemCard';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios'

const useStyles = theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },  
});

class ItemList extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get(`http://localhost:4002/api/getAllposts`)
      .then(res => {
        this.setState({posts: res.data.results})
        console.log(this.state.posts)
      }).catch(err => console.log(err));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <div className="container-flexbox-ItemList">
        {/* testing card layout*/}
        {this.state.posts.map((post, key) => {
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
export default connect(
  null,
)(withStyles(useStyles)(ItemList));