import React from 'react'
import RecentPostCard from "./RecentPostCard";
import HotPostCard from "./HotPostCard";

const useStyles = theme => ({
  root: {   
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row"
  }
});


const NoteablePosts = () => {
  const classes = useStyles();
  return (
    <div style={classes.root}>
        <div style={classes.mainContainer}>
          <RecentPostCard />
          <HotPostCard />
        </div>   
    </div>
  )
}

export default NoteablePosts;
