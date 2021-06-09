import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { resetCurrentPost } from '../../../../redux/actions/postActions';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 200,
    maxWidth: 274,
    flexGrow: 1,
    marginRigth: 25,
    marginTop: 35,
    minHeight: 325,
    marginBottom: 30,
    backgroundColor: theme.test,
  },
  optionsButton: {
    width: 206,
  },
  details: {
    width: '100%',
  },
}));
const options = [
  'Change primary email',
  'Update profile information',
  'Delete Account',
];

const PostHubCard = (props) => {
  // let history = useHistory();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
    if (selectedIndex === 0) {
      //update email
    } else if (selectedIndex === 1) {
      props.history.push('dashboard/update');
    } else if (selectedIndex === 2) {
      //delete account
    }
    //etc
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <ButtonGroup
        variant="contained"
        size="large"
        color="primary"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button className={classes.optionsButton} onClick={handleClick}>
          {options[selectedIndex]}
        </Button>
        <Button
          color="primary"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.slice(0, options.length).map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index + 1)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default connect(null, { resetCurrentPost })(withRouter(PostHubCard));
