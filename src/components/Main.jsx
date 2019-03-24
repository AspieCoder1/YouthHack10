import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
	<div className="container">
		<button className="button">
			<Link className="button__link" to="/recycle">
				Recycling
			</Link>
		</button>
		<button className="button">
			<Link className="button__link" to="/tracker">
				Track Recycle
			</Link>
		</button>
		<button className="button">
			<Link className="button__link" to="/climate">
				Climate Change
			</Link>
		</button>
	</div>
);
