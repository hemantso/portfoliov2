import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">My,<span> Myself</span> & I</h2><br/>

      <p className="info-text">
        I'm <span>Full Stack Software Engineer</span> located in <span>India</span>. Passionate about bringing both the technical and visual aspects of digital products
        to life. User experience, beautiful pixels and writing clean accessible,human code matters to me. I sweat the details. And as a follower of <span>John
        Maedaâs Laws Of Simplicity</span>, I agree that less is more.<br/>
        I have a Bachelor of Engineering in Computer Science from <a href="https://www.chitkara.edu.in/" rel="noreferrer" target="_blank">Chitakra University</a> ð®ð³, a Certificate of Web
        Development Immersive from <a href="https://www.microverse.org/" rel="noreferrer" target="_blank">Microverse</a> ð±ð·.<br/>
        I'm happiest when I'm creating, learning, exploring and thinking about how to make things
        better. Currently solving deceptively simple problems at <a href="https://www.wayamoney.com/personal" rel="noreferrer" target="_blank">Wayamoney.com</a>.<br/>
        Interested in working on ambitious projects with positive people! ð <br/><br/>

        <a href="#contact" rel="noreferrer" target="_blank">Let's make something special.ðð»</a>
      </p>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
