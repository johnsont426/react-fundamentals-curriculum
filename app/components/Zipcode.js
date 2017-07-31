var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

class Zipcode extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			city: ''
		}
	}

	handleChange(event) {
		var value = event.target.value;
		this.setState(function(){
			return {
				city: value
			}
		});
	}

	render() {
		return (
			<div className="zipcode-container" style={this.props.style}>
				<input type="text" className="form-control" placeholder="Phoenix, Arizona" onChange={this.handleChange} />
				<Link 
					to={{
						pathname: '/forecast',
						search: '?city=' + this.state.city
					}}
					className='btn btn-success'>
					Get Weather
				</Link>
			</div>
		)
	}
}

Zipcode.propTypes = {
	style: PropTypes.object,
}

module.exports = Zipcode;