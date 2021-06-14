import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '0.5rem',
  },
  itemImage: {
    height: 200,
    width: 250,
    border: '1px solid #ddd',
    borderRadius: 2,
  },
}));

const ItemCard = ({ title, src }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography variant="h6">{title}</Typography>
      <img className={classes.itemImage} src={src} alt="Logo" />
    </Card>
  );
};

export default withStyles(useStyles)(ItemCard);
