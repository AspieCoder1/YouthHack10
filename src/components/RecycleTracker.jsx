import React from 'react';

import ProgressBar from './ProgressBar.jsx';

export default class RecycleTracker extends React.Component {
	state = {
		score: 0,
		target: 20
	};

	// componentDidMount() {
	//   if(localStorage.getItem('score')) {
	//     this.setState('score', localStorage.getItem('score'));
	//   }
	// }

	// componentWillUnmount() {
	//   localStorage.setItem('score', this.state.score);
	// }

	incrementScore = () => {
		this.setState(state => {
			return {
				score: (state.score += 1)
			};
		});
	};

	calcPercentage = () => {
		const percentage = (this.state.score / this.state.target) * 100;
		return percentage > 100 ? 100 : percentage;
	};

	render() {
		return (
			<div className="center">
				<div className="centered">
					<h1>Recycling Tracker</h1>
					{this.state.score < this.state.target ? (
						<h2>
							You have recycled {this.state.score > 0 ? this.state.score : 'no'}{' '}
							{this.state.score === 1 ? 'item' : 'items'}.{' '}
							{this.state.target - this.state.score <= 0
								? 'No'
								: `Only ${this.state.target - this.state.score}`}{' '}
							item(s) left.
						</h2>
					) : (
						<h2>Yay! You have reached your daily recyling goal!!</h2>
					)}
				</div>
				<ProgressBar percentage={this.calcPercentage()} />
				<button className="button" onClick={this.incrementScore}>
					Let's Recycle
				</button>
			</div>
		);
	}
}
