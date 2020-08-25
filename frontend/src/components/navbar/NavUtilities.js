import React, { Component } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { categories } from '../Categories';
import { handleDrawerOpen } from '../../redux/actions/navActions';
import { setTerm, setCategory } from '../../redux/actions/postActions';
import { authModalOpen, signOut } from '../../redux/actions/authActions';
import { fade, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#FF5722'
  },
  hide: {
    display: 'none'
  },
  filterButton: {
    color: '#FF5722'
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  categoryForm: {
    minWidth: 120
  },

  categorySelect: {
    maxHeight: 35,
    backgroundColor: '#636161',
    minWidth: 65,
    color: 'white'
  },
  iconColor: {
    color: '#FF5722'
  },

  searchIcon: {
    paddingTop: 5,
    paddingRight: 5,
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 2),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  title: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  linkTitle: {
    textDecoration: 'none',
    color: 'white'
  }
});

class NavUtilities extends Component {
  state = { term: '' };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.setTerm(this.state.term);
  };

  handleOnChange = e => {
    this.setState({ term: e.target.value });
  };

  handleCategoryChange = event => {
    this.props.setCategory(event.target.value);
  };
  handleSignOut = () => {
    this.props.signOut();
  };
  render() {
    const { classes } = this.props;
    const categoriesList = categories;
    return (
      <div>
        <Toolbar>
          <IconButton
            edge='start'
            className={clsx(
              classes.menuButton,
              this.props.drawerOpen && classes.hide
            )}
            onClick={() => this.props.handleDrawerOpen()}
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <IconButton className={classes.filterButton}>
            <ArrowDropDownIcon />
          </IconButton>
          {/* SELECT MENU FOR CATEGORIES */}
          <div className={classes.search}>
            <FormControl variant='outlined' className={classes.categoryForm}>
              <Select
                onChange={event => this.handleCategoryChange(event)}
                displayEmpty
                className={classes.categorySelect}
                value={this.props.category}
                inputProps={{
                  classes: {
                    icon: classes.iconColor
                  }
                }}
              >
                {categoriesList.map(category => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <form onSubmit={e => this.handleOnSubmit(e)}>
              <InputBase
                placeholder='Search...'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                onChange={e => this.handleOnChange(e)}
                inputProps={{ 'aria-label': 'search' }}
              />
            </form>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
          <div className={classes.title}>
            <Link to={'/'} className={classes.linkTitle}>
              <Typography style={{ fontFamily: 'Roboto Mono' }} variant='h6'>
                Swapper
              </Typography>
            </Link>
          </div>
          <div>
            {this.props.isSignedIn && (
              <Button onClick={() => this.handleSignOut()} color='inherit'>
                Logout
              </Button>
            )}
            {!this.props.isSignedIn && (
              <Button
                style={{ fontFamily: 'Roboto Mono' }}
                onClick={() => this.props.authModalOpen(0)}
                color='inherit'
              >
                Login / Register
              </Button>
            )}
          </div>
        </Toolbar>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
  drawerOpen: state.nav.drawerOpen,
  category: state.posts.category
});

export default connect(
  mapStateToProps,
  { authModalOpen, handleDrawerOpen, setTerm, setCategory, signOut }
)(withStyles(useStyles)(NavUtilities));
