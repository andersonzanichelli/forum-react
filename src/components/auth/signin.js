import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {

  handleFormSubmit({ username, password }) {
    this.props.signin({ username, password });
  }

  render() {
    const { handleSubmit, fields: { username, password }} = this.props;

    return (
      <div className="signin">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label>Email:</label>
            <input {...username} className="form-control" />
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <input {...password} className="form-control" />
          </fieldset>
          <button action="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
},null, actions)(Signin);
