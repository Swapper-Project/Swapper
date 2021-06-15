import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InboxHeader from './InboxHeader';
import InboxCard from './InboxCard';

const useStyles = (theme) => ({
  root: {
    minWidth: 460,
    margin: '1rem',
  },
});

class Inbox extends Component {
  render() {
    return (
      <div>
        <InboxHeader />
        <InboxCard />
      </div>
    );
  }
}

export default withStyles(useStyles)(Inbox);
