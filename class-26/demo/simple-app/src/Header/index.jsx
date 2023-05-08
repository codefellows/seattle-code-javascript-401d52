import React from 'react';
// const React = require('react');

class Header extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {}
  }

  // Contract - render a title on our app.
  render() {
    return (
      <header>
        <h1>{this.props.headerText}</h1>
      </header>
    )
  }
}

// module.exports = Header
export default Header;
