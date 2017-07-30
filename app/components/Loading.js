var React = require('react');

class Loading extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: 'Loading'
		}
	}
	componentDidMount() {
		var stopper = 'Loading...';
		this.interval = window.setInterval(function() {
			if(this.state.text === stopper) {
				this.setState(function() {
					return {
						text: 'Loading'
					}
				});
			}else {
				this.setState(function(previousState) {
					return {
						text: previousState.text + '.'
					}
				});
			}
		}.bind(this), 300)
	}
	componentWillUnmount() {
		window.clearInterval(this.interval)
	}
	render() {
		return (
			<p className='loading'>
				{this.state.text}
			</p>
		)
	}
}

module.exports = Loading;