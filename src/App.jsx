// ES6
import React from 'react'
import Router from 'react-router'
import routes from './routes/routes'

Router.run(routes, (Handler) => {
  React.render(<Handler />, document.getElementById('app'))
})

// var React = require('react')
// var Router = require('react-router')
// var routes = require('./routes/routes')
//
// Router.run(routes, function(Handler) {
//   React.render(<Handler />, document.getElementById('app'))
// })
