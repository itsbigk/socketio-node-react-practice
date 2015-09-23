import React from 'react'
import Display from './Display'
import Join from './Join'
import Ask from './Ask'
import Router, { Link } from 'react-router'

class Audience extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Display if={this.props.status === 'connected'}>
          <Display if={this.props.member.name}>
            <Display if={!this.props.currentQuestion}>
              <h2>Welcome { this.props.member.name }</h2>
              <p>{this.props.audience.length} audience members connected</p>
              <Display if={this.props.member && this.props.member.type === 'member'}>
                <p>Questions will appear here</p>
              </Display>
            </Display>
            <Display if={this.props.currentQuestion && this.props.member.type === 'member'}>
              <Ask emit={this.props.emit} question={this.props.currentQuestion} />
            </Display>
            <Display if={!this.props.currentQuestion && this.props.member.type === 'speaker'}>
              <Link to="speaker">Ask a question</Link>
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
}

export default Audience

// var React = require('react')
// var Display = require('./Display')
// var Join = require('./Join')
// var Ask = require('./Ask')
// var Link = require('react-router').Link
//
// var Audience = React.createClass({
//   render() {
//     return (
//       <div>
//         <Display if={this.props.status === 'connected'}>
//           <Display if={this.props.member.name}>
//             <Display if={!this.props.currentQuestion}>
//               <h2>Welcome { this.props.member.name }</h2>
//               <p>{this.props.audience.length} audience members connected</p>
//               <Display if={this.props.member && this.props.member.type === 'member'}>
//                 <p>Questions will appear here</p>
//               </Display>
//             </Display>
//             <Display if={this.props.currentQuestion && this.props.member.type === 'member'}>
//               <Ask emit={this.props.emit} question={this.props.currentQuestion} />
//             </Display>
//             <Display if={!this.props.currentQuestion && this.props.member.type === 'speaker'}>
//               <Link to="speaker">Ask a question</Link>
//             </Display>
//           </Display>
//           <Display if={!this.props.member.name}>
//             <h1>Join the session</h1>
//             <Join emit={ this.props.emit } />
//           </Display>
//         </Display>
//       </div>
//     )
//   }
// })
//
// module.exports = Audience;
