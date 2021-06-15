import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwapperCard from './SwapperCard';
import ItemCard from './ItemCard';
import ChatBubble from './ChatBubble';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Gravatar from 'react-gravatar';
import Ratings from 'react-ratings-declarative';

const useStyles = (theme) => ({
  chatroom: {
    display: 'grid',
    gridTemplateRows: '10vh 30vh 30vh 10vh 10vh',
    gridTemplateColumns: '1fr 3fr 1fr',
  },
  swapperList: {
    backgroundColor: theme.palette.white.main,
    borderRight: '1px solid #ddd',
    padding: '1rem',
    gridRow: '1 / -1',
    gridColumn: '1 / 2',
  },
  swapper: {
    borderBottom: '1px solid #ddd',
    backgroundColor: theme.palette.white.main,
    gridRow: '1 / 2',
    gridColumn: '2 / 3',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
  },
  swapperInfo: {
    display: 'flex',
  },
  avatar: {
    borderRadius: '12.5rem',
    width: '2rem',
    height: '2rem',
  },
  username: {
    margin: '0 0.5rem',
  },
  ratingDiv: {
    display: 'flex',
    flexWrap: 'nowrap',
    marginLeft: '2.3rem',
  },
  wishlistBtn: {
    backgroundColor: '#FF5722',
    color: 'white',
    width: '8rem',
    '&:hover': {
      backgroundColor: theme.palette.offWhite.main,
    },
    float: 'right',
  },
  messages: {
    backgroundColor: theme.palette.offWhite.main,
    overflow: 'scroll',
    gridRow: '2 / 5',
    gridColumn: '2 / 3',
  },
  textArea: {
    backgroundColor: theme.palette.white.main,
    borderTop: '1px solid #ddd',
    gridRow: '5/ -1',
    gridColumn: '2 / 3',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textField: {
    width: '85%',
  },
  sendBtn: {
    backgroundColor: '#FF5722',
    color: 'white',
    width: '5rem',
    '&:hover': {
      backgroundColor: theme.palette.offWhite.main,
    },
  },
  swapperItem: {
    backgroundColor: theme.palette.white.main,
    borderLeft: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
    padding: '0.5rem',
    gridRow: '1 / 3',
    gridColumn: '3 / -1',
  },
  myItem: {
    backgroundColor: theme.palette.white.main,
    borderLeft: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
    padding: '0.5rem',
    gridRow: '3/5',
    gridColumn: '3 / -1',
  },

  actions: {
    backgroundColor: theme.palette.white.main,
    borderLeft: '1px solid #ddd',
    gridRow: '5 / -1',
    gridColumn: '3 / -1',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptBtn: {
    backgroundColor: '#FF5722',
    color: 'white',
    width: '8rem',
    '&:hover': {
      backgroundColor: theme.palette.offWhite.main,
    },
  },
});

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          username: 'theDuderino25',
          text: (
            <p>
              That's a fantastic Xbox Series X you have there. What do you want
              to trade it for?
            </p>
          ),
          currentUser: false,
        },
        {
          username: 'ChunkySmalls',
          text: <p>Check my wishlist bro</p>,
          currentUser: true,
        },
        {
          username: 'theDuderino25',
          text: (
            <p>
              Ah, I see you desire a saxaphone. It is such a marvelous
              coincidence that I so happen to have one posted here
            </p>
          ),
          currentUser: false,
        },
        {
          username: 'ChunkySmalls',
          text: <p>I'll go check it out</p>,
          currentUser: true,
        },
        {
          username: 'ChunkySmalls',
          text: (
            <p>
              Exactly what I was looking for, here's my phone number, let's
              discuss the exchange deets and seal the deal.
            </p>
          ),
          currentUser: true,
        },
        {
          username: 'theDuderino25',
          text: <p>Great, I'll send a request.</p>,
          currentUser: false,
        },
        {
          username: 'System',
          text: (
            <p>
              ChunkySmalls sent a request to theDuderino25's dashboard: Trade{' '}
              <u>Saxaphone</u> for <u>Xbox Series X</u> If agreed upon please
              exchange necessary information to complete the swap.
            </p>
          ),
        },
        {
          username: 'System',
          text: (
            <p>theDuderino25 accepted ChunkySmalls's request. Get Swapping!</p>
          ),
        },
      ],

      otherUser: 'theDuderino25',
      user: 'ChunkySmalls',
      message: '',
      rating: 0.5,
    };
  }

  setMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  submitMessage = (e) => {
    e.preventDefault();

    //websocket stuff here
    //----------

    this.setState({
      messages: [
        ...this.state.messages,
        {
          username: this.state.user,
          text: (
            <p>
              {this.state.message}
              <br />
            </p>
          ),
        },
      ],
    });
    e.target.reset();
    this.setState({
      message: '',
    });
  };

  render() {
    const { otherUser: user, messages, rating } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.chatroom}>
        <div className={classes.swapperList}>
          <Typography variant="h4">Swappers</Typography>
          <SwapperCard />
        </div>
        <div className={classes.swapper}>
          <div>
            <div className={classes.swapperInfo}>
              <Gravatar
                email="a-email@example.com"
                className={`${classes.avatar}`}
              />
              <Typography className={classes.username} variant="h6">
                {user}
              </Typography>
            </div>
            <div className={classes.ratingDiv}>
              <Ratings
                rating={rating}
                widgetDimensions="20px"
                widgetSpacings="0px"
              >
                <Ratings.Widget widgetRatedColor="#FF5722" />
                <Ratings.Widget widgetRatedColor="#FF5722" />
                <Ratings.Widget widgetRatedColor="#FF5722" />
                <Ratings.Widget widgetRatedColor="#FF5722" />
                <Ratings.Widget widgetRatedColor="#FF5722" />
              </Ratings>
              <Typography>(69)</Typography>
            </div>
          </div>

          <Button className={classes.wishlistBtn}>View Wishlist</Button>
        </div>
        <div className={classes.messages}>
          {messages.length !== 0 &&
            messages.map((message, index) => {
              return (
                <ChatBubble
                  key={index}
                  currentUser={message.currentUser}
                  text={message.text}
                />
              );
            })}
        </div>
        <div className={classes.textArea}>
          <TextField
            className={classes.textField}
            id="outlined-multiline-static"
            label="Multiline"
            variant="outlined"
          />
          <Button className={classes.sendBtn}>Send</Button>
        </div>
        <div className={classes.swapperItem}>
          <Typography variant="h5">Swapper Item</Typography>
          <ItemCard
            title="Saxophone"
            src="https://images.unsplash.com/photo-1598367772323-3ae346826817?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
          />
        </div>
        <div className={classes.myItem}>
          <Typography variant="h5">My Item</Typography>
          <ItemCard
            title="Xbox Series X"
            src="https://cdn.mos.cms.futurecdn.net/iGoyV8755hauMhq55pVC2J.jpg"
          />
        </div>
        <div className={classes.actions}>
          <Button className={classes.acceptBtn}>Send Swap Request</Button>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(ChatRoom);
