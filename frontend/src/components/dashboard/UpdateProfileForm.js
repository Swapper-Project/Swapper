import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPostCategories } from '../Categories';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { Multiselect } from 'multiselect-react-dropdown';

const useStyles = theme => ({
  root: {
    margin: 10
  },
  fieldContainer: {
    margin: 10
  },
  textfield: {
    width: '100%'
  },
  buttons: {
    textAlign: 'center'
  },
  cancelButton: {
    margin: 10
  },
  updateButton: {
    margin: 10,
    backgroundColor: '#FF5722',
    '&:hover': {
      backgroundColor: 'white'
    }
  },
  error: {
    width: '90%',
    marginLeft: 10
  }
});

class UpdateProfileForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <Alert severity='error'>{error}</Alert>;
    }
  }

  renderInputField = ({ input, label, meta }) => {
    const { classes } = this.props;
    return (
      <div className={classes.fieldContainer}>
        {label === 'Interests' ? (
          <TextField
            className={classes.textfield}
            {...input}
            label={label}
            variant='outlined'
            multiline
            rows={3}
            rowsMax={4}
          />
        ) : (
          <TextField
            type={input.name}
            className={classes.textfield}
            {...input}
            label={label}
            variant='outlined'
          />
        )}
        <div className={classes.error}>{this.renderError(meta)}</div>
      </div>
    );
  };

  renderCategoryField = ({ input, label, meta }) => {
    const categories = createPostCategories;
    return (
      <div>
        <Multiselect
          options={categories}
          isObject={false}
          onSelect={values => input.onChange(values)}
          placeholder='Select Categories'
          style={{
            chips: {
              background: '#FF5722'
            },
            searchBox: {
              margin: 10
            }
          }}
        />
        {/* <div className={classes.error}>{this.renderError(meta)}</div> */}
      </div>
    );
  };

  onSubmit = formVals => {
    this.props.onSubmit(formVals);
  };

  render() {
    const { classes } = this.props;
    return (
      <form
        className={classes.root}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div>
          <Field name='email' component={this.renderInputField} label='Email' />
          <Field
            name='interests'
            component={this.renderInputField}
            label='Interests'
          />
          <Field
            name='category'
            component={this.renderCategoryField}
            label='Category'
          />
        </div>

        <div className={classes.buttons}>
          <Button
            className={classes.cancelButton}
            component={Link}
            to='/dashboard'
            type='submit'
            variant='contained'
          >
            Cancel
          </Button>
          <Button
            className={classes.updateButton}
            type='submit'
            variant='contained'
          >
            Update
          </Button>
        </div>
      </form>
    );
  }
}

const validate = formVal => {
  const errors = {};
  if (!formVal.email) {
    errors.email = 'You must enter a valid email';
  }
  return errors;
};

const mapStateToProps = state => ({});

UpdateProfileForm = connect(null)(withStyles(useStyles)(UpdateProfileForm));

export default reduxForm({ form: 'updateUserForm', validate })(
  UpdateProfileForm
);
