import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPostCategories } from '../../../Categories';
import { DropzoneArea } from 'material-ui-dropzone';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { Typography } from '@material-ui/core';

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
  },
  imageHeader: {
    textAlign: 'center'
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
          filesLimit={1}
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
            type={input.name}
            className={classes.field}
            defaultValue={this.props.edit && this.props.initialValues.title}
            onChange={val => input.onChange(val)}
            label={label}
            variant='outlined'
            multiline
          />
        ) : (
          <TextField
            className={classes.field}
            defaultValue={
              this.props.edit && this.props.initialValues.description
            }
            onChange={val => input.onChange(val)}
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
          <Select
            {...input}
            defaultValue={this.props.initialValues.category}
            label={label}
          >
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
          {this.props.edit && (
            <Typography variant='h6' className={classes.imageHeader}>
              Upload Replacement Image (Optional)
            </Typography>
          )}
          <Field
            name='dropzone'
            component={this.renderDropzone}
            label='Dropzone'
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

const mapStateToProps = state => ({
  initialValues: {
    title: state.posts.currentPost.title,
    description: state.posts.currentPost.description,
    category: state.posts.currentPost.category
  }
});

PostingForm = reduxForm({
  form: 'postingForm',
  enableReinitialize: true,
  validate
})(PostingForm);

PostingForm = connect(mapStateToProps)(withStyles(useStyles)(PostingForm));

export default PostingForm;
