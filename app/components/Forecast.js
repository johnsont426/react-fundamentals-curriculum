var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');
var queryString = require('query-string');
var Loading = require('./Loading');

function WeatherGrid(props) {
	return (
		<div>
			<h1 className='forecast-header'>{props.city}</h1>
			<div className='forecast-container'>
			{props.arr.map(function(day){
				return <Day dayData={day} key={day.dt}/>
			})}
			</div>
		</div>
	)
}

WeatherGrid.propTypes = {
	arr: PropTypes.array.isRequired,
	city: PropTypes.string.isRequired
}

function Day(props){
	var dt = new Date(props.dayData.dt*1000);
	var options = {weekday: 'long', month: 'short', day: '2-digit'};
	var date = dt.toLocaleDateString('en-US', options);

	return (
		<div className='dayContainer'>
			<img className='weather' src={'/app/images/weather-icons/' + props.dayData.weather[0].icon + '.svg'} alt='weather'/>
			<h2 className='subheader'>{date}</h2>
		</div>
	)
}

Day.propTypes = {
	dayData: PropTypes.object.isRequired
}

class Forecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: '',
			forecastArr: null,
			city: queryString.parse(this.props.location.search).city
		};
		this.getWeather = this.getWeather.bind(this);
	}
	getWeather() {
		api.forecast(this.state.city).then(function(results){
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
	componentWillReceiveProps(nextProps) {
		this.setState(function() {
			return {
				city: queryString.parse(nextProps.location.search).city,
				loading: true
			}
		});
		this.getWeather();
	}
	componentDidMount() {
		this.getWeather();
	}
	render() {
		var loading = this.state.loading;

		if(loading) {
			return <Loading />
		}
		return <WeatherGrid arr={this.state.forecastArr} city={this.state.city}/>
	}
}

module.exports = Forecast;