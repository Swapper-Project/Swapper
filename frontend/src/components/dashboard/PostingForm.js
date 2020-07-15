import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPostCategories } from '../Categories';
import { DropzoneArea } from 'material-ui-dropzone';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

const useStyles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  leftContainer: {
    width: '50%',
    minWidth: 310
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    minWidth: 310
  },
  error: {
    width: '90%',
    marginLeft: 10
  },
  field: {
    width: '90%',
    margin: 10
  },
  select: {
    width: '50%',
    margin: 10,
    minWidth: 120
  },
  dropzone: {
    width: '90%',
    margin: 10
  },
  cancelButton: {
    margin: 10
  },
  postButton: {
    margin: 10,
    backgroundColor: '#FF5722',
    '&:hover': {
      backgroundColor: 'white'
    }
  }
});

class PostingForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <Alert severity='error'>{error}</Alert>;
    }
  }

  renderDropzone = ({ input, label, meta }) => {
    const { classes } = this.props;
    return (
      <div className={classes.dropzone}>
        <DropzoneArea
          {...input}
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          showPreviews={true}
          showPreviewsInDropzone={false}
          showAlerts={false}
        />
      </div>
    );
  };

  renderInputField = ({ input, label, meta }) => {
    const { classes } = this.props;
    return (
      <div>
        {label === 'Title' ? (
          <TextField
            className={classes.field}
            {...input}
            label={label}
            variant='outlined'
          />
        ) : (
          <TextField
            className={classes.field}
            {...input}
            label={label}
            variant='outlined'
            multiline
            rows={3}
            rowsMax={4}
          />
        )}

        <div className={classes.error}>{this.renderError(meta)}</div>
      </div>
    );
  };

  renderCategorySelect = ({ input, label, meta }) => {
    const { classes } = this.props;
    const categoriesList = createPostCategories;
    return (
      <div>
        <FormControl className={classes.select} variant='outlined'>
          <InputLabel>Category</InputLabel>
          <Select label={label} {...input}>
            {categoriesList.map(category => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className={classes.error}>{this.renderError(meta)}</div>
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
        <div className={classes.leftContainer}>
          <Field
            name='dropzone'
            component={this.renderDropzone}
            lable='Dropzone'
          />
        </div>
        <div className={classes.rightContainer}>
          <Field name='title' component={this.renderInputField} label='Title' />
          <Field
            name='description'
            component={this.renderInputField}
            label='Description'
          />
          <Field
            name='category'
            component={this.renderCategorySelect}
            label='Category'
          />
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
            className={classes.postButton}
            type='submit'
            variant='contained'
          >
            Create
          </Button>
        </div>
      </form>
    );
  }
}

const validate = formVal => {
  const errors = {};

  if (!formVal.title) {
    errors.title = 'You must enter a title';
  }
  if (!formVal.description) {
    errors.description = 'You must enter a description';
  }
  if (!formVal.category) {
    errors.category = 'You must select a category';
  }
  return errors;
};

PostingForm = withStyles(useStyles)(PostingForm);

export default reduxForm({ form: 'postingForm', validate })(PostingForm);
