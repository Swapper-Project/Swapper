import React from 'react';
import ItemCard from './ItemCard';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },  
}));

const ItemList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="container-flexbox-ItemList">
        {/* testing card layout*/}
        <ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard />
        <ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard />
      </div>
      <div className="pagination-container">
        <Pagination count={10} color="primary" showFirstButton showLastButton />
      </div>
    </div>
  );
}

export default ItemList;