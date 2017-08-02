import React from 'react';

class Loading extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: 'Loading'
		}
	}
	componentDidMount() {
		const stopper = 'Loading...';
		this.interval = window.setInterval(() => {
			if(this.state.text === stopper) {
				this.setState(function() {
					return {
						text: 'Loading'
					}
				});
			}else {
				this.setState((previousState) => {
					return {
						text: previousState.text + '.'
					}
				});
			}
		}, 300)
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

export default Loading;