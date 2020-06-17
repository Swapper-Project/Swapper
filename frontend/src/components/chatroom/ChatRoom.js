import React from 'react';

import Message from './Message.js';

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [{
                username: "ChunkSmalls",
                text: <p>That's a fantastic Uni-cycle you have there. What do you want to trade it for?</p>,
            }, {
                username: "theDuderino25",
                text: <p>Check my wishlist bro</p>,
            }, {
                username: "ChunkSmalls",
                text: <p>Ah, I see you desire a saxaphone. It is such a marvelous coincidence that I so happen to have one posted here</p>,
            }, {
                username: "theDuderino25",
                text: <p>I'll go check it out</p>,
            }, {
                username: "theDuderino25",
                text: <p>Exactly what I was looking for, here's my phone number, let's discuss the exchange deets and seal the deal.</p>,
            }, {
                username: "ChunkSmalls",
                text: <p>Great, I'll send a request.</p>,
            }, {
                username: "System",
                text: <p>ChunkySmalls sent a request to theDuderino25's dashboard: Trade <u>Saxaphone</u> for <u>Unicycle</u> If agreed upon please exchange necessary information to complete the swap.</p>,
            }, {
                username: "System",
                text: <p>theDuderino25 accepted ChunkySmalls's request. Get Swapping!</p>,
            }],

            otherUser: "theDuderino25",
            user: "ChunkySmalls",
            message: "message",
        };
    }

    setMessage = (event) => {
        this.setState({
          message: event.target.value,
        });
      }

    submitMessage = (e) => {
        e.preventDefault();

        //websocket stuff here 
        //----------

        this.setState({
            messages: [...this.state.messages, {
                username: this.state.user,
                text: <p>{this.state.message}</p>,
            }]
        });
        e.target.reset();
    }

    render() {
        const {otherUser: user} = this.state;
        const {messages} = this.state;

        return (
            <div>
                <ul>
                    <h1>Chatting with {user}</h1>
                    {messages.length <= 10 && (
                        messages.slice().map((msg) => 
                        <Message message={msg} />
                    )
                    )}
                    {messages.length > 10 && (
                        messages.slice(messages.length - 10).map((msg) => 
                            <Message message={msg} />
                        ))
                    }
                </ul>
                <form id="message-form" className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" onChange={this.setMessage}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ChatRoom;