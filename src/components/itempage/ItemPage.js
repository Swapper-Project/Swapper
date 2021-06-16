import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentPost } from '../../redux/actions/postActions';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemImageCard from './ItemImageCard';
import ItemDetails from './ItemDetails';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 20,
    height: '100%',
    backgroundColor: '#ededed',
  },
}));

const ItemPage = (props) => {
  useEffect(() => {
    props.setCurrentPost(props.match.params.postId);
    console.log(props);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {props.post && <ItemImageCard />}
            {!props.post && <p>Loading Post Image...</p>}
          </Grid>
          <Grid item xs={8}>
            {props.post && <ItemDetails />}
            {!props.post && <p>Loading Post Details...</p>}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  rating: state.user.rating,
  completedSwaps: state.user.completedSwaps,
  post: state.posts.currentPost,
});

export default connect(mapStateToProps, { setCurrentPost })(ItemPage);
