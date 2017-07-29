var React = require('react');
var Zipcode = require('./Zipcode');

class Nav extends React.Component {
	render() {
		return (
			<div className="navbar">
				<h1>Title</h1>
				<Zipcode style={{'flexDirection': 'row'}}/>
			</div>
		)
	}
}

module.exports = Nav;