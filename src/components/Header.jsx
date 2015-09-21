var React = require('react');
var Display = require('./Display');

var Header = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      status: 'disconnected'
    }
  },

  render() {
    return (
      <header className="row">
        <div className="col-xs-10">
          <h1>{this.props.title}</h1>
          <Display if={this.props.speaker}>
            <p>by {this.props.speaker}</p>
          </Display>
        </div>
        <div className="col-xs-2">
          <span id="connection-status" className={this.props.status}></span>
        </div>
      </header>
    )
  }
})

module.exports = Header;
