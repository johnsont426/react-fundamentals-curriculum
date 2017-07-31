var React = require('react');
var Day = require('./Forecast').Day;
var Temp = require('../utils/helpers');

class Detail extends React.Component {
	render() {
		var props = this.props.location.state;
		return (
			<div>
				<Day dayData={props[1]}/>
				<div className='description-container'>
					<p>{props[0]}</p>
					<p>{props[1].weather[0].description}</p>
					<p>min temp: {Temp(props[1].temp.min)}</p>
					<p>max temp: {Temp(props[1].temp.max)}</p>
					<p>humidity: {props[1].humidity}</p>
				</div>
			</div>
		)
	}
}

module.exports = Detail