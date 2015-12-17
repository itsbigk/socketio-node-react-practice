import React from 'react'
import Display from './Display'
import JoinSpeaker from './JoinSpeaker'
import Attendance from './Attendance'
import Questions from './Questions'
import Router, { Link } from 'react-router'

class Speaker extends React.Component {
  constructor(props) {
    super(props)

    this.newQuestion = this.newQuestion.bind(this)
  }

  newQuestion() {
    this.props.emit('newQuestion', null);
  }

  render() {
    return (
      <div>
        <Display if={this.props.status === 'connected'}>
          <Display if={this.props.member.name && this.props.member.type === 'speaker'}>
            <Display if={!this.props.currentQuestion}>
              <Questions emit={this.props.emit} questions={this.props.questions} />
            </Display>
            <Display if={this.props.currentQuestion}>
              <h2>View results for question: <br></br>
                  <Link to="board">{this.props.currentQuestion.q}</Link>
              </h2>
              <button className="btn btn-primary" onClick={this.newQuestion}>New Question</button>
            </Display>
            <Attendance audience={this.props.audience} />
          </Display>
          <Display if={!this.props.member.name}>
            <h2>Start the presentation</h2>
            <JoinSpeaker emit={this.props.emit} />
          </Display>
          <Display if={this.props.member && this.props.member.type === 'member'}>
            <h2>A member has already registered as the speaker</h2>
          </Display>
        </Display>
      </div>
    )
  }
}

export default Speaker
