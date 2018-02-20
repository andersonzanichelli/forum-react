import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CategoryAdder extends Component {

  constructor(props) {
    super(props);

    this.state = { category: '' };
  }

  handleChange(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveCategory(this.state.category);
    this.setState( {category: ''} );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="category-adder">
        <h4>New category</h4>
        <input
          value={this.state.category}
          onChange={ this.handleChange.bind(this) } />
        <button action="submit">Add</button>
      </form>
    );
  }
}

export default connect(null, actions)(CategoryAdder);
