import React from 'react';
import { Skill } from './Skill';

const SkillList = () => {
  const skills = [
    {
      name: 'HTML5',
      icon: 'fa-html5',
    },
    {
      name: 'CSS3',
      icon: 'fa-css3-alt',
    },
    {
      name: 'Javascript',
      icon: 'fa-js',
    },
    {
      name: 'React.js',
      icon: 'fa-react',
    },
    {
      name: 'NPM',
      icon: 'fa-npm',
    },
    {
      name: 'Sass',
      icon: 'fa-sass',
    },
    {
      name: 'Bootstrap',
      icon: 'fa-bootstrap',
    },
    {
      name: 'Git',
      icon: 'fa-github-square',
    },
    {
      name: 'WordPress',
      icon: 'fa-wordpress',
    },
    {
      name: 'Adobe Photoshop',
      icon: 'fa-adobe',
    },
  ];

  return (
    <div className='SkillList'>
      {skills.map(s => (
        <Skill skill={s} />
      ))}
    </div>
  );
};

export { SkillList };
