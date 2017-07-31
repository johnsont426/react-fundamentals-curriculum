var React = require('react');
var Zipcode = require('./Zipcode');

class Form extends React.Component {
	render() {
		return (
			<div className="home-container" style={{'backgroundImage': 'url(http://artist-submarine-48713.netlify.com/app/images/pattern.svg)'}}>
				<h1 className="header">Enter a City and State</h1>
				<Zipcode />
			</div>
		)
	}
}

module.exports = Form;