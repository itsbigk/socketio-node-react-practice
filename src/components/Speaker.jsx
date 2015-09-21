var React = require('react')
var Display = require('./Display');
var JoinSpeaker = require('./JoinSpeaker');
var Attendance = require('./Attendance');
var Questions = require('./Questions');

var Speaker = React.createClass({
  render() {
    return (
      <div>
        <Display if={this.props.status === 'connected'}>
          <Display if={this.props.member.name && this.props.member.type === 'speaker'}>
            <Questions emit={this.props.emit} questions={this.props.questions} />
            <Attendance audience={this.props.audience} />
          </Display>
          <Display if={!this.props.member.name}>
            <h2>Start the presentation</h2>
            <JoinSpeaker emit={this.props.emit} />
          </Display>
        </Display>
      </div>
    )
  }
})

module.exports = Speaker;
