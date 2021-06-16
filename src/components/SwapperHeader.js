import React from 'react'
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = theme => ({
  root: {   
    display: "flex",
    justifyContent: "center",
    marginBottom: 40
  },
  logoImg: {
    height: "4rem",
    width: "6rem",
    marginTop: 20
  },
});


const SwapperHeader = () => {
  const classes = useStyles();
  return (
    <div style={classes.root}>
      <img style={classes.logoImg} src="./img/swapper.png" />
      <Typography variant="h1" color="textPrimary" display="inline">
        Swapper
      </Typography>
    </div>
  )
}

export default SwapperHeader;
