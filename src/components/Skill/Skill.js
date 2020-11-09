import React from 'react';
import './Skill.scss';

const Skill = props => {
  const { skill } = props;

  return (
    <div className='Skill'>
      <span title={skill.name} role='presentation' className='Skill__icon'>
        <i className={`fab ${skill.icon}`}></i>
      </span>
    </div>
  );
};

export { Skill };
