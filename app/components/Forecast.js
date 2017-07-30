var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');
var Loading = require('./Loading')

class Forecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: '',
			forecastArr: null
		}
	}
	componentDidMount() {
		var city = queryString.parse(this.props.location.search).city;
		api.forecast(city).then(function(results){
			if(results === null) {
				this.setState(function() {
					return {
						error: 'failed to fetch weather data',
						loading: false}
				})
			}
			this.setState(function() {
				return {
					forecastArr: results,
					loading: false
				}
			})
		}.bind(this))
	}
	render() {
		var loading = this.state.loading;

		if(loading) {
			return <Loading />
		}
		return <p>got it!</p>
	}
}

module.exports = Forecast;