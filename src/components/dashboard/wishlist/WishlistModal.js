import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    width: '50%',
  },
  header: {
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
    margin: '0 1rem',
  },
  content: {
    padding: '1rem',
  },
  itemName: {
    width: '100%',
    marginBottom: '1rem',
  },
  slider: {
    marginTop: '2.5rem',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTop: '1px solid #ddd',
    margin: '0 1rem',
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.offWhite.main,
    margin: '0.5rem',
    width: '2rem',
  },
}));

const marks = [
  {
    value: 20,
    label: '20',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 60,
    label: '60',
  },
  {
    value: 80,
    label: '80',
  },
  {
    value: 100,
    label: '100',
  },
];

const WishlistModal = ({
  wishlistModalOpen,
  handleModalClose,
  handleAddItem,
}) => {
  const [itemName, setItemName] = useState('');
  const [priorityLevel, setPriorityLevel] = useState(0);

  const setName = (e) => {
    setItemName(e.target.value);
  };

  const setLevel = (e, value) => {
    setPriorityLevel(value);
  };

  const submitItem = () => {
    const item = {
      name: itemName,
      level: priorityLevel,
    };
    handleAddItem(item);
    handleModalClose();
  };

  const classes = useStyles();
  return (
    <div>
      <Modal open={wishlistModalOpen} className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.header}>
            <Typography variant="h4">Add a Wishlist Item</Typography>
          </div>
          <div className={classes.content}>
            <Typography variant="h6">Item Name</Typography>
            <TextField
              variant="outlined"
              className={classes.itemName}
              onChange={(e) => setName(e)}
            ></TextField>
            <Typography variant="h6">Priority Level</Typography>
            <Slider
              value={priorityLevel}
              step={5}
              marks={marks}
              valueLabelDisplay="on"
              onChange={(e, value) => setLevel(e, value)}
              className={classes.slider}
            />
          </div>
          <div className={classes.btnContainer}>
            <Button className={classes.btn} onClick={() => handleModalClose()}>
              Cancel
            </Button>
            <Button className={classes.btn} onClick={() => submitItem()}>
              Add
            </Button>
          </div>
        </Paper>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
  userId: state.auth.userId,
});

export default connect(mapStateToProps, null)(WishlistModal);
