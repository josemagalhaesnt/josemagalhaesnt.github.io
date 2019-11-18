import React, { Fragment } from 'react';
import './ProgressBar.scss';

const ProgressBar = props => {
  return (
    <Fragment>
      <progress
        className='ProgressBar'
        value={props.percentage}
        max={100}></progress>
      <strong>{props.percentage + '%'}</strong>
    </Fragment>
  );
};

export { ProgressBar };
