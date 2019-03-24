import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
	<div className="content-container">
		<h1 className="centered">Recycling</h1>
		<img
			src="https://www.recycle-more.co.uk/images/mobius_loop-y3oe3n.jpg"
			className="image-centered"
			height="400"
			width="400"
		/>
		<p className="paragraph">
			<b>Recycling:</b> the action or process of converting waste into reusable
			material. So the question is, why are you littering when you couldrecycle?
			94% of people believe that littering is a huge environmental problem yet
			people still litter from day to day.
		</p>
		<p className="paragraph">
			Wondering what the things you recycle turn into? Well, <b>100%</b> of the
			fruits and vegetables that you recycle turn into soil enricher and
			compost. Your plastic bottles turn into children's toys, garden furniture,
			car bumpers and many more items. Most people are illusioned to think that
			general waste is thrown into landfill. It isn't. Items like: plastic pots,
			tubs and trays are turned into electricity.
		</p>
		<p className="paragraph">
			Great, now you know how things are recyled, but how can you waste less?
			For starters, you coud probably buy less clothes. The average UK household
			has £4,000 of clothes with a <b>third</b> of them being unworn as of 2018.
			To make more use of your clothes, spend your money on quality clothes that
			you will wear multiple times or, if you can, buy second hand clothes from
			a charity shop.
		</p>
		<h2 className="quote">
			In the UK, around 100,000 washing machines are reused every year.
		</h2>
		<p className="paragraph">
			There are mans simple things that can be done to reduce the amount of
			electronics we waste. This is a particularly important issue given that
			the electronics industry inderctly contributes to <b>30%</b> of global
			pollution, which is mainly due to mineral extraction.
		</p>
		<p className="paragraph">Here's how:</p>
		<h3>Borrow it</h3>
		<p className="paragraph">
			There are some electrical items that you might not use very often so you
			may be better off borrowing or renting instead of buying new, like carpet
			cleaners and hedge trimmers.
		</p>
		<h3>Repair it</h3>
		<p className="paragraph">
			Before you get rid of your washing machine or telly see whether you can
			get it fixed. A part might just need replacing which would be a fraction
			of the cost of buying a new one.
		</p>
		<h3>Pass it on</h3>
		<p className="paragraph">
			For electrical appliances that you no longer use then ask friends, family
			or neighbours if they can make use of it.
		</p>
		<h3>Sell it</h3>
		<p className="paragraph">
			If your game console is still in good working order, there are plenty of
			shops and websites where you can trade it in for cash.
		</p>
		<h3>Donate and recycle it</h3>
		<p className="paragraph">
			There are some charity shops that take electrical items – check before you
			donate. If your electrical items are beyond repair then take it to your
			local Recycling Centre
		</p>
		<Link to="/">Go Home</Link>
	</div>
);
