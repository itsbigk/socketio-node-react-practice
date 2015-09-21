var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var Main = require('../components/Main')
var Speaker = require('../components/Speaker')
var Audience = require('../components/Audience')
var Board = require('../components/Board')
var Whoops = require('../components/Whoops404')

var routes = (
  <Route handler={Main}>
    <DefaultRoute name="home" handler={Audience} />
    <Route name="speaker" path="speaker" handler={Speaker} />
    <Route name="board" path="board" handler={Board} />
    <NotFoundRoute handler={Whoops} />
  </Route>
)

module.exports = routes;
