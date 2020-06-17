import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'grey',
    height: 430
  },
  stars: {
    color: '#FF5722'
  }
}));

const ItemDetails = () => {
  const classes = useStyles();

  return (
    // <Paper className={classes.paper}>
    <div>
      <Typography variant='h4'>Xbox Series X</Typography>
      <Typography variant='h6'>
        User: Chunkysmalls
        <StarIcon style={{ color: '#FF5722' }} />
        <StarIcon style={{ color: '#FF5722' }} />
        <StarIcon style={{ color: '#FF5722' }} />
        <StarIcon style={{ color: '#FF5722' }} />
        <StarHalfIcon style={{ color: '#FF5722' }} />
        (25)
      </Typography>
      <Typography variant='h6'>Category: Electronics</Typography>
      <br />
      <Typography>Description:</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nibh,
        congue in venenatis eu, semper in augue. Morbi varius elit orci, eu
        auctor nunc pretium eu. Duis sed luctus dolor, in pretium arcu. In
        efficitur eros sit amet diam vehicula, vel vestibulum lacus venenatis.
        Vivamus a pellentesque magna. Nunc rutrum bibendum nibh eu efficitur.
        Aenean ac nibh eget tortor volutpat ultricies. Aenean at pretium lacus.
        Aenean pretium quam id magna aliquam, sollicitudin efficitur orci
        auctor. Curabitur faucibus lacus ut dictum lacinia. Nulla facilisi.
      </Typography>
      <br />
      <br />
      <Typography>
        <VisibilityIcon style={{ color: '#FF5722' }} />
        Viewed 100 Times
      </Typography>
    </div>
    // </Paper>
  );
};

export default ItemDetails;
