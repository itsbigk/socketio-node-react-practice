import React from 'react'
import { Router, RouteHandler, Link } from 'react-router'
import io from 'socket.io-client'
import Header from './Header'
import NavBar from './NavBar'

class Main extends React.Component {
  constructor() {
    super()

    this.state = {
      status: 'disconnected',
      title: '',
      member: {},
      audience: [],
      speaker: '',
      questions: [],
      currentQuestion: false,
      results: {}
    }
    this.emit = this.emit.bind(this)
  }

  componentWillMount() {
    this.socket = io('http://localhost:3000')

    this.socket.on('connect', () => {
      var member =  sessionStorage.member ? JSON.parse(sessionStorage.member) : null

      if(member && member.type === 'member') {
        this.emit('join', member)
      } else if(member && member.type === 'speaker') {
        this.emit('start', { name: member.name, title: sessionStorage.title })
      }

      this.setState({ status: 'connected' })
    })

    this.socket.on('disconnect', () => {
        this.setState({
        status: 'disconnected',
        title: 'disconnected',
        speaker: ''
      })
    })

    this.socket.on('welcome', (serverState) => this.setState(serverState))

    this.socket.on('joined', (member) => {
      sessionStorage.member = JSON.stringify(member)
      this.setState({ member: member })
    });

    this.socket.on('audience', (newAudience) => {
      this.setState({ audience: newAudience })
    });

    this.socket.on('start', (presentation) => {
      if(this.state.member.type === 'speaker') {
        sessionStorage.title = presentation.title
      }
      this.setState(presentation)
    });

    this.socket.on('end', (serverState) => this.setState(serverState))

    this.socket.on('ask', (question) => {
      sessionStorage.answer = ''
      this.setState({
        currentQuestion: question,
        results: {a:0,b:0,c:0,d:0}
       })
    })

    this.socket.on('results', (data) => {
      this.setState({ results: data })
    })

    this.socket.on('resetQuestion', (serverState) => this.updateState(serverState))
  }

  emit(eventName, payload) {
    this.socket.emit(eventName, payload);
  }

  render() {
     return (
       <div>
         <NavBar member={this.state.member} />
         <Header {...this.state} />
         <div className="container">
           <RouteHandler {...this.state} emit={this.emit} />
         </div>
       </div>
     )
  }
}

export default Main

// var React = require('react')
// var Router = require('react-router')
// var RouteHandler = Router.RouteHandler
// var Link = Router.Link
// var io = require('socket.io-client')
// var Header = require('./Header')
// var NavBar = require('./NavBar')
//
// var Main = React.createClass({
//   getInitialState() {
//     return {
//       status: 'disconnected',
//       title: '',
//       member: {},
//       audience: [],
//       speaker: '',
//       questions: [],
//       currentQuestion: false,
//       results: {}
//     }
//   },
//
//   componentWillMount() {
//     this.socket = io('http://localhost:3000');
//     this.socket.on('connect', this.connect);
//     this.socket.on('disconnect', this.disconnect);
//     this.socket.on('welcome', this.updateState);
//     this.socket.on('joined', this.joined);
//     this.socket.on('audience', this.updateAudience);
//     this.socket.on('start', this.start);
//     this.socket.on('end', this.updateState);
//     this.socket.on('ask', this.ask);
//     this.socket.on('results', this.updateResults);
//     this.socket.on('resetQuestion', this.updateState);
//   },
//
//   emit(eventName, payload) {
//     this.socket.emit(eventName, payload);
//   },
//
//   connect() {
//     var member =  sessionStorage.member ? JSON.parse(sessionStorage.member) : null;
//
//     if(member && member.type === 'member') {
//       this.emit('join', member);
//     } else if(member && member.type === 'speaker') {
//       this.emit('start', { name: member.name, title: sessionStorage.title });
//     }
//
//     this.setState({ status: 'connected' });
//   },
//
//   disconnect() {
//     this.setState({
//       status: 'disconnected',
//       title: 'disconnected',
//       speaker: ''
//     });
//   },
//
//   updateState(serverState) {
//     this.setState(serverState);
//   },
//
//   joined(member) {
//     sessionStorage.member = JSON.stringify(member);
//     this.setState({ member: member });
//   },
//
//   updateAudience(newAudience) {
//     this.setState({ audience: newAudience });
//   },
//
//   start(presentation) {
//     if(this.state.member.type === 'speaker') {
//       sessionStorage.title = presentation.title;
//     }
//     this.setState(presentation);
//   },
//
//   ask(question) {
//     sessionStorage.answer = '';
//     this.setState({
//       currentQuestion: question,
//       results: {a:0,b:0,c:0,d:0}
//      });
//   },
//
//   updateResults(data) {
//     this.setState({ results: data });
//   },
//
//   render() {
//     return (
//       <div>
//         <NavBar member={this.state.member} />
//         <Header {...this.state} />
//         <div className="container">
//           <RouteHandler {...this.state} emit={this.emit} />
//         </div>
//       </div>
//     )
//   }
// })
//
// module.exports = Main;
