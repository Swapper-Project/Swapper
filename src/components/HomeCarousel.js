import React, { Component } from 'react';
import Carousel from 'react-material-ui-carousel'
import { withStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = theme => ({
  root: {
    display:'flex', 
    justifyContent:'center' 
  },
  slide: {
    height: "30rem", 
    width: "50rem"
  },
  slideImg: {
    maxWidth: "700%",
    height: "200%"
  },
  caption: {
    fontWeight: "bold"
  },
  subCaption: {
    float: "right"
  }
});

const slides = [
  {
    caption: "Get what you need, trade what you don't.",
    subCaption: "all while saving money",
    img: "damir-spanic-vwaTtIhCjVg-unsplash.jpg",
    txtColor: "black",
  },
  {
    caption: "Swap, and have fun while doing it.",
    subCaption: "bring the human element back to trading",
    img: "helena-lopes-e3OUQGT9bWU-unsplash.jpg",
    txtColor: "blue"
  },
  {
    caption: "One person's trash is another person's treasure. ",
    subCaption: "you'd be suprised what people are willing to swap for",
    img: "geri-chapple-EFuw2hb93Wo-unsplash.jpg",
    txtColor: "white"
  },
  {
    caption: "Personalize your profile and complete you collections",
    subCaption: "gotta swap for em' all",
    img: "thimo-pedersen-dip9IIwUK6w-unsplash.jpg",
    txtColor: "white"
},
]

const HomeCarousel = (props)=> {
  return (
    <Carousel>
      {
        slides.map((slide, i) => <Slide key={i} slide={slide} />)
      }
    </Carousel>
  )
}

const Slide = (props) => { 
  const classes = useStyles();
    return (
        <Box style={classes.root}>
          <Card>
            <CardActionArea>
              <CardMedia style={classes.slide}>
                <img src={`img/carousel_imgs/${props.slide.img}`} style={classes.slideImg} />
              </CardMedia>

              <CardContent>
                <Typography variant="h2" style={{color: `${props.slide.txtColor}`} }>
                  <Box fontWeight="fontWeightLight" m={1}>
                    {props.slide.caption}  
                  </Box> 
                </Typography>
                
                <Typography variant="h4" style={{color: `${props.slide.txtColor}`}}>
                  <Box fontWeight="fontWeightLight" m={1}>
                    {props.slide.subCaption}  
                  </Box> 
                </Typography>
              
              </CardContent>
            </CardActionArea>
        </Card>
      </Box>
    )
}

export default HomeCarousel;
