import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Message from './Message.js';
import ChatIcon from '@material-ui/icons/Chat';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Gravatar from 'react-gravatar';
import Ratings from 'react-ratings-declarative';

const useStyles = theme => ({
  topRow: {
    display: 'flex',
    flexGrow: 1,
    height: '25%',
    minHeight: 200,
    borderBottom: '1px solid grey'
  },
  itemImage: {
    height: '50%',
    width: '50%',
    border: '1px solid #ddd',
    borderRadius: 4,
    padding: 5
  },
  chatIcon: {
    height: '50%',
    width: '50%',
    padding: 5,
    backgroundColor: '#FF5722',
    border: '4px solid #ddd',
    borderRadius: 20
  },
  userDiv: {
    display: 'flex',
    float: 'left'
  },
  avatar: {
    borderRadius: 200,
    width: 30,
    height: 30
  },
  username: {
    marginLeft: 10,
    marginRight: 5
  },
  ratingDiv: {
    marginTop: 5,
    display: 'flex',
    float: 'left'
  },
  topLeft: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10
  },
  topRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topMiddle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topLeftText: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wishlistButton: {
    marginLeft: 40,
    backgroundColor: '#FF5722',
    '&:hover': {
      backgroundColor: 'white'
    },
    width: '30%'
  }
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
          )
        },
        {
          username: 'ChunkySmalls',
          text: <p>Check my wishlist bro</p>
        },
        {
          username: 'theDuderino25',
          text: (
            <p>
              Ah, I see you desire a saxaphone. It is such a marvelous
              coincidence that I so happen to have one posted here
            </p>
          )
        },
        {
          username: 'ChunkySmalls',
          text: <p>I'll go check it out</p>
        },
        {
          username: 'ChunkySmalls',
          text: (
            <p>
              Exactly what I was looking for, here's my phone number, let's
              discuss the exchange deets and seal the deal.
            </p>
          )
        },
        {
          username: 'theDuderino25',
          text: <p>Great, I'll send a request.</p>
        },
        {
          username: 'System',
          text: (
            <p>
              ChunkySmalls sent a request to theDuderino25's dashboard: Trade{' '}
              <u>Saxaphone</u> for <u>Xbox Series X</u> If agreed upon please
              exchange necessary information to complete the swap.
            </p>
          )
        },
        {
          username: 'System',
          text: (
            <p>theDuderino25 accepted ChunkySmalls's request. Get Swapping!</p>
          )
        }
      ],

      otherUser: 'theDuderino25',
      user: 'ChunkySmalls',
      message: 'message',
      rating: 0.5
    };
  }

  setMessage = event => {
    this.setState({
      message: event.target.value
    });
  };

  submitMessage = e => {
    e.preventDefault();

    //websocket stuff here
    //----------

    this.setState({
      messages: [
        ...this.state.messages,
        {
          username: this.state.user,
          text: <p>{this.state.message}</p>
        }
      ]
    });
    e.target.reset();
  };

  render() {
    const { otherUser: user } = this.state;
    const { messages } = this.state;
    const { classes } = this.props;
    const { rating } = this.state;
    return (
      <div className='container-flexbox-chatroom'>
        <div className={classes.topRow}>
          <Grid container spacing={3}>
            <Grid xs={5} item>
              <div className={classes.topLeft}>
                <img
                  className={classes.itemImage}
                  src='https://cdn.mos.cms.futurecdn.net/iGoyV8755hauMhq55pVC2J.jpg'
                  alt='Logo'
                />
                <div className={classes.topLeftText}>
                  <Typography variant='h5'>Your posted item: </Typography>
                  <Typography variant='h5'>Xbox Series X</Typography>
                </div>
              </div>
            </Grid>
            <Grid className={classes.topMiddle} xs={2} item>
              <ChatIcon className={classes.chatIcon} />
            </Grid>
            <Grid className={classes.topRight} xs={5} item>
              <div>
                <Typography variant='h5'>Chatting with: </Typography>
                <div className={classes.userDiv}>
                  <Gravatar
                    email='a-email@example.com'
                    className={`${classes.avatar}`}
                  />
                  <Typography className={classes.username} variant='h6'>
                    {user}
                  </Typography>
                  <div className={classes.ratingDiv}>
                    <Ratings
                      rating={rating}
                      widgetDimensions='20px'
                      widgetSpacings='0px'
                    >
                      <Ratings.Widget widgetRatedColor='#FF5722' />
                      <Ratings.Widget widgetRatedColor='#FF5722' />
                      <Ratings.Widget widgetRatedColor='#FF5722' />
                      <Ratings.Widget widgetRatedColor='#FF5722' />
                      <Ratings.Widget widgetRatedColor='#FF5722' />
                    </Ratings>
                    <Typography>(69)</Typography>
                  </div>
                </div>
                <Button className={classes.wishlistButton}>
                  View Wishlist
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>

        <ul>
          {messages.length <= 10 &&
            messages.slice().map(msg => <Message message={msg} />)}
          {messages.length > 10 &&
            messages
              .slice(messages.length - 10)
              .map(msg => <Message message={msg} />)}
        </ul>
        <form
          id='message-form'
          className='input'
          onSubmit={e => this.submitMessage(e)}
        >
          <input type='text' onChange={this.setMessage} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(ChatRoom);
