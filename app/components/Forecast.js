import React from 'react';
import PropTypes from 'prop-types';
import { getForecast } from '../utils/api';
import queryString from 'query-string';
import Loading from './Loading';

function WeatherGrid({ city, children }) {
	return (
		<div>
			<h1 className='forecast-header'>{city}</h1>
			<div className='forecast-container'>
				{children}
			</div>
		</div>
	)
}

WeatherGrid.propTypes = {
	city: PropTypes.string.isRequired
}

export class Day extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { dayData, clickHandler } = this.props;
		const dt = new Date(dayData.dt*1000);
		const options = {weekday: 'long', month: 'short', day: '2-digit'};
		const date = dt.toLocaleDateString('en-US', options);
		return (
			<div className='dayContainer' onClick={clickHandler}>
				<img className='weather' src={require(`../images/weather-icons/${dayData.weather[0].icon}.svg`)} alt='weather'/>
				<h2 className='subheader'>{date}</h2>
			</div>
		)
	}
}

Day.propTypes = {
	dayData: PropTypes.object.isRequired
}

export class Forecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: '',
			forecastArr: null,
			city: ''
		};
		this.getWeather = this.getWeather.bind(this);
	}
	async getWeather(city) {
		this.setState(() => { loading: true });
		const result = await getForecast(city)
		this.setState(() => {
			return {
				city,
				forecastArr: result,
				loading: false
			}
		})
	}
	handleClick(day) {
		this.props.history.push({
			pathname: `/detail/${this.state.city}`,
			state: day
		});
	}
	componentWillReceiveProps(nextProps) {
		const city = queryString.parse(nextProps.location.search).city;
		this.getWeather(city);
	}
	componentDidMount() {
		const city = queryString.parse(this.props.location.search).city;
		this.getWeather(city);
	}
	render() {
		const { city, loading, forecastArr } = this.state;
		return (
			loading ? <Loading /> :
			<WeatherGrid city={city}>
				{forecastArr.map((day) => {
					return <Day dayData={day} key={day.dt} clickHandler={this.handleClick.bind(this, day)}/>
				})}
			</WeatherGrid>
		)

	}
}
