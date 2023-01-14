import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im';
import { TfiEmail } from 'react-icons/tfi';
import resume from '../assets/resume.pdf';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="mailto:hello.hemant.soni@gmail.com" rel="noreferrer" target="_blank">
        <TfiEmail />
      </a>
    </div>
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
