import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const CategoryList = (props) => {

  const options = props.categories.map(category => <option key={category} value={category}>{category}</option>);

  return (
    <div>
      <select className="category-list">{options}</select>
    </div>
  );
}

function mapStateToProps(state) {
  return { categories: state.categories };
}

export default connect(mapStateToProps, actions)(CategoryList);
