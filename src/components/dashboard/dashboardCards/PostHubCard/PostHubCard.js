import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { resetCurrentPost } from '../../../../redux/actions/postActions';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import StarsIcon from '@material-ui/icons/Stars';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 200,
    maxWidth: 274,
    flexGrow: 1,
    marginRigth: 25,
    marginTop: 35,
    minHeight: 325,
    marginBottom: 30,
    backgroundColor: '#ededed'
  },
  optionsButton: {
   width: 206,
  },
  details: {
    width: '100%'
  },
  content: {
    display: 'flex',
    float: 'left'
  },
  contentContainer: {
    margin: 5,
    paddingLeft: 20,
    maxWidth: 500,
    minWidth: 300
  },
  statistics: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  header: {
    paddingTop: 7,
    paddingLeft: 20,
    paddingRight: 20
  },
  swapDescription: {
    paddingTop: 7,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 80
  },
  attrHeaderText: {
    fontWeight: 'bold',
    fontSize: '1.0em'
  },
  info: {
    paddingLeft: 5
  },
  swapButton: {
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 15
  }
});

const PostHubCard = props => {
  let history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
      props.resetCurrentPost();
      props.history.push('dashboard/post');
  };

  return (
    <Card className={classes.root} className={classes.root} elevation={6}>
    <Grid container direction='row' alignItems='center'>
      <Grid item sm={12}>
        <Typography className={classes.header} variant='h4'>
          Swap Hub
        </Typography>  
        <Divider variant='middle' />
        <Typography className={classes.swapDescription} variant='h6'>
          Got something worth trading? List it on the site here!
        </Typography>  
      </Grid>
      <div className={classes.swapButton}>    
        <Button
          variant='contained'
          size='large'
          color='primary'
          onClick={handleClick}
        >Create a Swap</Button>
      </div>
      <Typography className={classes.header} variant='h6'>
            Statistics
      </Typography>
      <div className={classes.statistics}>
        <div className={classes.contentContainer}>
        <Divider />
          <Typography className={classes.attrHeaderText} variant='overline'>Average Rating</Typography><br />
          <div className={classes.content}>
            <StarsIcon color='primary' />
            <Typography className={classes.info}>{props.rating}</Typography>
          </div>
        </div><br />
        <div className={classes.contentContainer}>
          <Typography className={classes.attrHeaderText} variant='overline'>Completed Swaps</Typography><br />
          <div className={classes.content}>
            <CheckBoxIcon color='primary' />
            <Typography className={classes.info}>
              {props.completedSwaps}
            </Typography>
          </div>
        </div>
      </div>
    </Grid>
    </Card>
  );
};

const mapStateToProps = state => ({
  completedSwaps: state.user.completedSwaps,
  rating: state.user.rating,
});

export default connect(
  mapStateToProps,
  { resetCurrentPost }
)(withRouter(PostHubCard));
