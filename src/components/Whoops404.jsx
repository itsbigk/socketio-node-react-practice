var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Whoops = React.createClass({
  render() {
    return (
      <div id="not-found">
        <h1>Whoops...</h1>
        <p>We cannot find the page that you have requested.</p>

         {/* <Link to="home">Return home</Link> */}
      </div>
    )
  }
})

module.exports = Whoops;
