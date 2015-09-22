import React from 'react'

class Display extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (this.props.if) ? <div>{this.props.children}</div> : null;
  }
}

export default Display

// var React = require('react');
//
// var Display = React.createClass({
//
//   render() {
//     return (this.props.if) ? <div>{this.props.children}</div> : null;
//   }
//
// });
//
// module.exports = Display;
