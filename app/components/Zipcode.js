import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
		this.setState(() => {
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

export default Zipcode;