import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import SemiCircleProgressBar from 'react-progressbar-semicircle';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const useStyles = makeStyles((theme) => ({
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
}));

const WishlistTabRow = ({ priorityLevel, itemName }) => {
  const [semiCircleColor, setSemiCircleColor] = useState('red');

  useEffect(() => {
    if (priorityLevel < 33) {
      setSemiCircleColor('green');
    } else if (priorityLevel < 60) {
      setSemiCircleColor('yellow');
    } else if (priorityLevel < 80) {
      setSemiCircleColor('orange');
    }
  });

  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <SemiCircleProgressBar
          className={classes.semiCircle}
          stroke={semiCircleColor}
          diameter={80}
          percentage={priorityLevel}
        />
        {priorityLevel >= 80 && <WhatshotIcon style={{ color: 'red' }} />}
        <Typography
          id="test"
          className={classes.itemName}
          variant="h6"
          style={{
            paddingLeft: `${priorityLevel >= 80 ? 70 : 95}px`,
          }}
        >
          {itemName}
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
};

export default WishlistTabRow;
