import React from 'react'
import Display from './Display'
import Router, { Link } from 'react-router'

class NavBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Display if={this.props.member.type === 'speaker'}>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li><Link to="home">Home</Link></li>
                <li><Link to="speaker">Speaker</Link></li>
                <li><Link to="board">Board</Link></li>
              </ul>
            </div>
          </nav>
        </Display>
        <Display if={!this.props.member || this.props.member.type !== 'speaker'}>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li><Link to="home">Home</Link></li>
                <li><Link to="board">Board</Link></li>
              </ul>
            </div>
          </nav>
        </Display>
      </div>
    )
  }
}

export default NavBar
