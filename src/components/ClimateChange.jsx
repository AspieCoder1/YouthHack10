import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
	<div className="content-container">
		<h1 className="centered">Climate Change</h1>
		<img
			className="image-centered"
			src="https://r.hswstatic.com/w_907/gif/climate-change-bear.jpg"
		/>
		<div className="quote">
			<p className="quote-body">
				"Climate Change is no longer a far off problem; it is happening here, it
				is happening now"
			</p>
			<p className="quote-author">- Barrack Obama</p>
		</div>
		<p className="paragraph">
			Scientists have high confidence that global temperatures will continue to
			rise for decades to come, largely due to greenhouse gases produced by
			human activities. The Intergovernmental Panel on Climate Change (IPCC),
			which includes more than 1,300 scientists that forecast a temperature rise
			of 6 to 12 degrees Celsius over the next century.
		</p>
		<p className="pargraph">
			Future effects of global warming consist of: Temperatures will continue to
			rise, summer will be longer, there will be more draughts and heatwaves,
			hurricanes will become stronger and more intense, the sea level will raise
			up to 4 feet by 2100,the Arctic will probably be ice free and many more
			disastrous things could happen if we don't do something.
		</p>
		<p className="paragraph">
			<b>What Are the causes of global warming?</b>
		</p>
		<ul>
			<li>Agricluture, mainy from cattle</li>
			<li>Landfill</li>
			<li>Industry</li>
			<li>Power generation</li>
			<li>Use of fossil fuels</li>
		</ul>
		<p className="paragraph">
			<b>How can we overcome climate change?</b>
		</p>
		<p className="paragraph">It isn't too difficult to help</p>
		<ul>
			<li>Planting more trees</li>
			<li>Using alternative energy sources</li>
			<li>Carbon capture</li>
			<li>Recycling</li>
			<li>Use public transport</li>
		</ul>
		<Link to="/">Go Home</Link>
	</div>
);
