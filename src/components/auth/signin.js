import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signin extends Component {

  handleFormSubmit({ username, password }) {
    this.props.signin({ username, password });
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
    const { handleSubmit, fields: { username, password }} = this.props;

    return (
      <div className="signin">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label>Email:</label>
            <input type="text" {...username} className="form-control" />
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <input type="password" {...password} className="form-control" />
          </fieldset>
          <button onClick={handleSubmit(this.handleFormSubmit.bind(this))} className="btn btn-primary">Sign in</button>
          { this.renderAlert() }
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

Signin = reduxForm({ form: 'signin', fields: [ 'username', 'password' ] })(Signin);
export default connect(mapStateToProps, actions)(Signin)
