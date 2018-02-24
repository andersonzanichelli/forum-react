import React, { Component } from 'react';
import Header from './header';
import PostList from './posts_list';

export default class App extends Component {
  render() {
    return (
      <div>
      <Header />
      { this.props.children }
      </div>
    );
  }
}
