import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signup extends Component {

  handleFormSubmit(formProps) {
    this.props.signup(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage)
      return(
        <div className="alert alert-danger">
          <strong>Oops!</strong> { this.props.errorMessage }
        </div>
      )
  }

  render() {
    const { handleSubmit, fields: { username, password, passwordConfirm }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" type="email" {...username}/>
          { username.touched && username.error && <div className="error">{ username.error }</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" type="password" {...password}/>
          { password.touched && password.error && <div className="error">{ password.error }</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input className="form-control" type="password" {...passwordConfirm}/>
          { passwordConfirm.touched && passwordConfirm.error && <div className="error">{ passwordConfirm.error }</div>}
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>
        { this.renderAlert() }
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.username)
    errors.username = 'Please enter an email';

  if (!formProps.password)
    errors.password = 'Please enter a password';

  if (!formProps.passwordConfirm)
    errors.passwordConfirm = 'Please enter a password confirmation';

  if (formProps.password !== formProps.passwordConfirm)
    errors.password = 'Password must match to the confirmation';

  if (!validEmail(formProps.username))
    errors.username = 'Please the username must be an email';

  return errors;
}

function validEmail(username) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  debugger
  return re.test(username);
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['username', 'password', 'passwordConfirm'] },
  mapStateToProps, actions)(Signup);
