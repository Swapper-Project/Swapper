import React, { setState, Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
const useStyles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '100%',
    height: 50,
    paddingLeft: 20,
    paddingTop: 5,
    backgroundColor: '#f5f5f5',
    margin: 5
  },
  priorityText: {
    minWidth: 150,
    fontSize: '1.0em'
  },
  itemNameText: {
    minWidth: 150,
    marginLeft: 45,
    fontSize: '1.0em'
  },
  buttonSpacing: {
    marginLeft: 'auto',
    marginRight: 15
  },
  editButton: {
    backgroundColor: '#FF5722',
    color: 'white',
    minWidth: 160,
    marginLeft: 35
  },
  wishlistHeader: {
    minWidth: 600
  }
});

class WishlistTabHeader extends Component {
  state = { wantLevel: 61, wantColor: 'red' };

  componentDidMount() {
    if (this.state.wantLevel < 33) {
      this.setState({ wantColor: 'green' });
    } else if (this.state.wantLevel < 60) {
      this.setState({ wantColor: 'yellow' });
    } else if (this.state.wantLevel < 80) {
      this.setState({ wantColor: 'orange' });
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid className={classes.wishlistHeader}>
          <Card className={classes.root}>
            <Typography
              className={classes.priorityText}
              component='span'
              variant='overline'
            >
              <b>Priority</b>
            </Typography>
            <Typography
              className={classes.itemNameText}
              component='span'
              variant='overline'
            >
              <b>Wishlist Item</b>
            </Typography>
            <CardActions className={classes.buttonSpacing}>
              <Button
                className={classes.editButton}
                onClick={() => {
                  this.props.history.push('dashboard/addWishItem');
                }}
              >
                Add Wishlist Item
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withRouter(connect()(withStyles(useStyles)(WishlistTabHeader)));
