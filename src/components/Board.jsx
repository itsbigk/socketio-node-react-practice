import React from 'react'
import Display from './Display'
import { BarChart } from 'react-d3'
import Router, { Link } from 'react-router'

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.stateCreate = this.stateCreate.bind(this)
    this.barGraphData = this.barGraphData.bind(this)
    this.state = this.stateCreate()
  }

  stateCreate() {
    var choices = Object.keys(this.props.results)

    return {
      choices: choices
    }
  }
  /*@TODO Fix the bar graph to either work with this omponent or choose a new one */
  barGraphData(results) {
    console.log(this.props.results)
    return Object.keys(results).map(function(choice) {
      return {
        label: choice,
        value: results[choice]
      };
    });
  }

  render() {
    return (
      <div id="scoreboard">
        <Display if={this.props.status === 'connected' && this.props.currentQuestion}>
          <BarChart data={this.barGraphData(this.props.results)}
                    title={this.props.currentQuestion.q}
                    height={window.innerHeight * 0.6}
                    width={window.innerWidth * 0.9} />
        </Display>
        <Display if={this.props.status === 'connected' && !this.props.currentQuestion && this.props.member.type !== 'speaker'}>
          <h3>Awaiting a Question...</h3>
        </Display>
        <Display if={this.props.status === 'connected' && !this.props.currentQuestion && this.props.member.type === 'speaker'}>
          <Link to="speaker">Ask a question</Link>
        </Display>
      </div>
    )
  }
}

export default Board
