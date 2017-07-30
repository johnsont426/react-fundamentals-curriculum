var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');

class Forecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
			forecastArr: null
		}
	}
	componentDidMount() {
		var city = queryString.parse(this.props.location.search).city;
		api.forecast(city).then(function(results){
			if(results === null) {
				this.setState(function() {
					return {error: 'failed to fetch weather data'}
				})
			}
			this.setState(function() {
				return {
					forecastArr: results
				}
			})
		}.bind(this))
	}
	render() {
		return (
			<p>{this.state.forecastArr}</p>
		)
	}
}

module.exports = Forecast;