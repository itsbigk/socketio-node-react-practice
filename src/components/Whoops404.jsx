import React from 'react'
import { Router, Link } from 'react-router'

class Whoops extends React.Component {
  render() {
    return (
      <div id="not-found">
        <h1>Whoops...</h1>
        <p>We cannot find the page that you have requested.</p>

         {/* <Link to="home">Return home</Link> */}
      </div>
    )
  }
}

export default Whoops
