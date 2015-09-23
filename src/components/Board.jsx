import React from 'react'
import Display from './Display'
import BarChart from 'react-d3'
import Router, { Link } from 'react-router'

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.barGraphData = this.barGraphData.bind(this)
  }

  barGraphData(results) {
    return Object.keys(results).map(function(choice) {
      return {
        label: choice,
        value: results[choice]
      }
    })
  }

  render() {
    return (
      <div id="scoreboard">
        {/*<Display if={this.props.status === 'connected' && this.props.currentQuestion}>
          <BarChart data={this.barGraphData(this.props.results)}
                    title={this.props.currentQuestion.q}
                    height={window.innerHeight * 0.6}
                    width={window.innerWidth * 0.9} />
        </Display>*/}
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


// var React = require('react')
// var Display = require('./Display')
// var BarChart = require('react-d3').BarChart
// var Link = require('react-router').Link
//
// var Board = React.createClass({
//
//   getInitialState() {
//     return {
//       results: this.props.results
//     };
//   },
//
//   barGraphData() {
//     var choices = Object.keys(this.state.results)
//     return Object.keys(this.state.results).map(function(choice) {
//       return {
//         label: choice,
//         value: choices[choice]
//       };
//     });
//   },
//
//   render() {
//     return (
//       <div id="scoreboard">
//         {/*<Display if={this.props.status === 'connected' && this.props.currentQuestion}>
//           <BarChart data={this.barGraphData()}
//                     title={this.props.currentQuestion.q}
//                     height={window.innerHeight * 0.6}
//                     width={window.innerWidth * 0.9} />
//         </Display>*/}
//         <Display if={this.props.status === 'connected' && !this.props.currentQuestion && this.props.member.type !== 'speaker'}>
//           <h3>Awaiting a Question...</h3>
//         </Display>
//         <Display if={this.props.status === 'connected' && !this.props.currentQuestion && this.props.member.type === 'speaker'}>
//           <Link to="speaker">Ask a question</Link>
//         </Display>
//       </div>
//     )
//   }
// })
//
// module.exports = Board;
