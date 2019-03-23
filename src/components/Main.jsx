import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <div className="container">
  <Link to="/recycle" className="button">Recycling</Link>
  <Link to="/tracker" className="button">Track Recycle</Link>
  <Link to="/climate" className="button">Climate Change</Link>
  </div>
);