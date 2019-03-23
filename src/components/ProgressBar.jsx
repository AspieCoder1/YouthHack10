import React from 'react';
import Filler from './Filler.jsx';

export default (props) => {
  return (
      <div className="progress-bar">
        <Filler percentage={props.percentage} />
      </div>
    )
}