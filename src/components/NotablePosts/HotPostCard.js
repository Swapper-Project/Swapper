import React from 'react'
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/Card";


const useStyles = theme => ({
  root: {   
    width: "28rem",
    height: "30rem",
    background: "#A9A5A4",
  },
});


const HotPostCard = () => {
  const classes = useStyles();
  return (
    <div>
      <Card style={classes.root}>
        <h1>
          Hot Post Here
        </h1>
      </Card>
    </div>
  )
}

export default HotPostCard;
