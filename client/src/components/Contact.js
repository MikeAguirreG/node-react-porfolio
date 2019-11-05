import React, { useState } from 'react';
import ContactIcons from './ContactIcons';
import axios from 'axios';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = {
  root: {
    //   background: "gray",
    borderRadius: 3
  },
  input: {
    color: 'white',
    borderWidth: '1px',
    borderColor: '#f50057 !important'
  },
  button: {
    background: 'linear-gradient(45deg, #282c34 30%, black 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#f50057 !important',
    color: 'white !important'
  },
  floatingLabelFocusStyle: {
    color: '#f50057 !important'
  }
};

const Contact = ({ classes }) => {
  // const classes = useStyles();
  const styleIcons = {
    color: 'black',
    size: '2.5em'
  };

  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    errorName: '',
    errorEmail: '',
    errorMessage: '',
    messageResponse: ''
  });
  const {
    name,
    email,
    message,
    errorName,
    errorEmail,
    errorMessage,
    messageResponse
  } = values;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const validateForm = () => {
    let errorNameText = '';
    let errorEmailText = '';
    let errorMessageText = '';

    if (!name) errorNameText = 'Please type your name.';
    if (!/^\S+@\S+$/.test(email)) errorEmailText = 'Please type a valid email.';
    if (!message) errorMessageText = 'Please write me a message';

    setValues({
      ...values,
      errorName: errorNameText,
      errorEmail: errorEmailText,
      errorMessage: errorMessageText
    });

    if (!errorMessageText && !errorEmailText && !errorMessageText) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid)
      axios
        .post('api/sendmail', { name, email, message })
        .then(success => {
          setValues({
            ...values,
            name: '',
            email: '',
            message: '',
            messageResponse: success.data
          });
        })
        .catch(error => {
          setValues({
            ...values,
            messageResponse: error.response.data
          });
        });
  };

  return (
    <div className="page-6">
      <h1>Contact me</h1>
      <h2>I will be glad to answer any question!</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          onChange={handleChange('name')}
          value={name}
          placeholder="Name."
          error={errorName ? true : false}
          label="Type your name"
          margin="normal"
          variant="outlined"
          helperText={errorName}
          className={classes.root}
          InputProps={{ classes: { notchedOutline: classes.notchedOutline } }}
          InputLabelProps={{ className: classes.floatingLabelFocusStyle }}
        />
        <br />
        <TextField
          name="email"
          onChange={handleChange('email')}
          // type='email'
          value={email}
          placeholder="Email."
          error={errorEmail ? true : false}
          label="Type your email"
          margin="normal"
          variant="outlined"
          helperText={errorEmail}
          className={classes.root}
          InputProps={{ classes: { notchedOutline: classes.notchedOutline } }}
          InputLabelProps={{ className: classes.floatingLabelFocusStyle }}
        />
        <br />
        <TextField
          name="message"
          onChange={handleChange('message')}
          value={message}
          rows="8"
          multiline
          placeholder="Message."
          error={errorMessage ? true : false}
          label="Write me a message"
          margin="normal"
          variant="outlined"
          helperText={errorMessage}
          className={classes.root}
          InputProps={{ classes: { notchedOutline: classes.notchedOutline } }}
          InputLabelProps={{ className: classes.floatingLabelFocusStyle }}
        />
        <br />
        <br />
        <Button type="submit" classes={{ root: classes.button }}>
          Send Message
        </Button>
      </form>
      <br />
      <div>{messageResponse}</div>
      <div className="row-icons v-btm">
        <ContactIcons styleIcons={styleIcons} />
      </div>
    </div>
  );
};

Contact.propTypes = { classes: PropTypes.object.isRequired };
export default withStyles(styles)(Contact);
