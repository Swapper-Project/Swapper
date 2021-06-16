import React from 'react'
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/Card";


const useStyles = theme => ({
  root: {   
    width: "28rem",
    height: "30rem",
    background: "#EC9657",
  },
});


const RecentPostCard = () => {
  const classes = useStyles();
  return (
    <div>
      <Card style={classes.root}>
        <h1>
          Recent Post Here
        </h1>
      </Card>
    </div>
  )
}

export default RecentPostCard;
