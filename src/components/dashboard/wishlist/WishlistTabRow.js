import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import SemiCircleProgressBar from 'react-progressbar-semicircle';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const useStyles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '100%',
    height: 50,
    minWidth: 250,
    paddingTop: 5,
    paddingLeft: 20,
    backgroundColor: '#f5f5f5',
    margin: 5,
  },
  semiCircle: {
    flexGrow: 1,
  },
  editButton: {
    backgroundColor: '#FF5722',
    color: 'white',
  },
  itemName: {
    flexGrow: 3,
    marginLeft: 20,
    marginRight: 20,
    minWidth: 160,
  },
  buttonSpacing: {
    marginLeft: 'auto',
    marginRight: 15,
  },
});

class WishlistTabRow extends Component {
  state = {
    priorityLevel: Math.floor(Math.random() * 100) + 1,
    semiCircleColor: 'red',
  };

  componentDidMount() {
    if (this.state.priorityLevel < 33) {
      this.setState({ semiCircleColor: 'green' });
    } else if (this.state.priorityLevel < 60) {
      this.setState({ semiCircleColor: 'yellow' });
    } else if (this.state.priorityLevel < 80) {
      this.setState({ semiCircleColor: 'orange' });
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Card className={classes.root}>
          <SemiCircleProgressBar
            className={classes.semiCircle}
            stroke={this.state.semiCircleColor}
            diameter={80}
            percentage={this.state.priorityLevel}
          />
          {this.state.priorityLevel >= 80 && (
            <WhatshotIcon style={{ color: 'red' }} />
          )}
          <Typography
            id="test"
            className={classes.itemName}
            variant="h6"
            style={{
              paddingLeft: `${this.state.priorityLevel >= 80 ? 70 : 95}px`,
            }}
          >
            Item name here
          </Typography>
          <CardActions className={classes.buttonSpacing}>
            <Button
              className={classes.editButton}
              onClick={() => console.log('Wishitem edit pressed')}
            >
              Edit
            </Button>
            <div>
              <IconButton
                className={classes.trashButton}
                onClick={() => console.log('Wishitem delete pressed')}
              >
                <DeleteForeverIcon fontSize="large" />
              </IconButton>
            </div>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(WishlistTabRow);
