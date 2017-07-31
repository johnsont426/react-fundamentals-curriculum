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
				{props.children}
			</div>
		</div>
	)
}

WeatherGrid.propTypes = {
	city: PropTypes.string.isRequired
}

class Day extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var dt = new Date(this.props.dayData.dt*1000);
		var options = {weekday: 'long', month: 'short', day: '2-digit'};
		var date = dt.toLocaleDateString('en-US', options);
		return (
			<div className='dayContainer' onClick={this.props.clickHandler}>
				<img className='weather' src={this.props.dayData.weather[0].icon + '.svg'} alt='weather'/>
				<h2 className='subheader'>{date}</h2>
			</div>
		)
	}
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
			city: ''
		};
		this.getWeather = this.getWeather.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	getWeather(city) {
		this.setState(function() {
			return {
				loading: true
			}
		});
		api.forecast(city).then(function(results){
			this.setState(function() {
				return {
					city: city,
					forecastArr: results.list,
					loading: false
				}
			})
		}.bind(this))
	}
	handleClick(day) {
		this.props.history.push({
			pathname: '/detail/' + this.state.city,
			state: [this.state.city, day]
		});
	}
	componentWillReceiveProps(nextProps) {
		var city = queryString.parse(nextProps.location.search).city;
		this.getWeather(city);
	}
	componentDidMount() {
		var city = queryString.parse(this.props.location.search).city;
		this.getWeather(city);
	}
	render() {
		return (
			this.state.loading ? <Loading /> :
			<WeatherGrid city={this.state.city}>
				{this.state.forecastArr.map(function(day){
					return <Day dayData={day} key={day.dt} clickHandler={this.handleClick.bind(this, day)}/>
				}, this)}
			</WeatherGrid>
		)

	}
}

module.exports = { 
	Forecast: Forecast,
	Day: Day
}