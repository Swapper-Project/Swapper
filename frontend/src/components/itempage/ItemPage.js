import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemImageCard from './ItemImageCard';
import ItemDetails from './ItemDetails';
import Paper from '@material-ui/core/Paper';
const id = null;

const useStyles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 20,
    backgroundColor: '#F2EFEB',
    height: 500
  }
});

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = { id: -1 };
  }

  componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    this.setState({ id: params.get('id') });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ItemImageCard />
            </Grid>
            <Grid item xs={8}>
              <ItemDetails />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles)(ItemPage);
