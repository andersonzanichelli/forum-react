import React, { Component } from 'react';
import CategoryAdder from './category_adder';
import CategoryList from './category_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <CategoryAdder />
        <CategoryList />
      </div>
    );
  }
}
