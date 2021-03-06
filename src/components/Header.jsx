import React from 'react'
import Display from './Display'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="row">
        <div className="col-xs-10">
          <h1>{this.props.title}</h1>
          <Display if={this.props.speaker}>
            <p>by {this.props.speaker}</p>
          </Display>
        </div>
        <div className="col-xs-2">
          <span id="connection-status" className={this.props.status}></span>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
}

Header.defaultProps = {
  status: 'disconnected'
}

export default Header
