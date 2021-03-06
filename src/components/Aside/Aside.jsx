import React from 'react';
import './Aside.css';
import AsideButton from './AsideButton/AsideButton';
const githubIcon = require('../../assets/github.png');
const linkedinIcon = require('../../assets/linkedin.png');
const twitterIcon = require('../../assets/twitter.png');

function Aside() {

  const socialLinks = {
    github: "https://github.com/jfelipelayos",
    linkedin: "https://www.linkedin.com/in/jfelipelayos/",
    twitter: "https://twitter.com/jfelipelayos",
  }

  return (
    <aside className='aside'>
      <p className="aside-text">
        <strong>Hey, I'm Felipe ๐๐ผ</strong><br /><br />
        I'm a software developer from Medellรญn, Colombia.
        <br /><br />

        Always looking for new exiting things to learn.
        <br /> <br />
        Photographing the world ๐ท Learning languages ๐ Reading books ๐ and Creating technology ๐ป
      </p>
      <div className="aside-buttons">
        <AsideButton title={'Github'} text={'Watch my code '} icon={githubIcon} link={socialLinks.github} />
        <AsideButton title={'Linkedin'} text={'Get in touch'} icon={linkedinIcon} link={socialLinks.linkedin} />
        <AsideButton title={'Twitter'} text={'Read my stuff'} icon={twitterIcon} link={socialLinks.twitter} />
      </div>
    </aside>
  )
}

export default Aside;
