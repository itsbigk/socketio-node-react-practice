var React = require('react')
var Display = require('./Display')
var Join = require('./Join');
var Ask = require('./Ask');

var Audience = React.createClass({
  render() {
    return (
      <div>
        <Display if={this.props.status === 'connected'}>
          <Display if={this.props.member.name}>
            <Display if={!this.props.currentQuestion}>
              <h2>Welcome { this.props.member.name }</h2>
              <p>{this.props.audience.length} audience members connected</p>
              <p>Questions will appear here</p>
            </Display>
            <Display if={this.props.currentQuestion}>
              <Ask emit={this.props.emit} question={this.props.currentQuestion} />
            </Display>
          </Display>
          <Display if={!this.props.member.name}>
            <h1>Join the session</h1>
            <Join emit={ this.props.emit } />
          </Display>
        </Display>
      </div>
    )
  }
})

module.exports = Audience;
