// import React from 'react'
//
// import App from './components/Main.jsx'
//
// React.render(<App />, document.getElementById('app'))

var React = require('react')
var Router = require('react-router')
var routes = require('./routes/routes')

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('app'))
})
