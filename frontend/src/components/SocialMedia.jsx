import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im';
import resume from '../assets/resume.pdf';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/hemantso" rel="noreferrer" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/hemantso" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href={resume} rel="noreferrer" target="_blank">
        <ImProfile />
      </a>
    </div>
  </div>
);

export default SocialMedia;
