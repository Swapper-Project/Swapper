import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import Button from '@material-ui/core/Button';
// import Alert from '@material-ui/lab/Alert';
// import WishItem from './WishItemPage';

const useStyles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

class WishItemForm extends Component {
  onSubmit = (formVals) => {
    this.props.onSubmit(formVals);
  };

  render() {
    const { classes } = this.props;
    return (
      <form
        className={classes.root}
        //onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div>FORM HERE</div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({});

WishItemForm = connect(mapStateToProps)(withStyles(useStyles)(WishItemForm));

export default WishItemForm;
