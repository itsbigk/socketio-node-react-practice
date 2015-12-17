//ES6
import React from 'react'
import Router, { Route, DefaultRoute, NotFoundRoute } from 'react-router'

import Main from '../components/Main'
import Speaker from '../components/Speaker'
import Audience from '../components/Audience'
import Board from '../components/Board'
import Whoops from '../components/Whoops404'

var routes = (
  <Route handler={Main}>
    <DefaultRoute name="home" handler={Audience} />
    <Route name="speaker" handler={Speaker} />
    <Route name="board" handler={Board} />
    <NotFoundRoute handler={Whoops} />
  </Route>
)

export default routes
