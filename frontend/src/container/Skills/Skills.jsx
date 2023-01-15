import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    maxWidth: '300px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    padding: '1rem',
    color: '#6b7688',
    textAlign: 'center',
    lineHeight: '1.5',
    opacity: '1',
    fontSize: "0.75rem",
  },
  customArrow: {
    color: 'rgba(220, 0, 78, 0.8)',
  },
}));

const Skills = () => {
  const classes = useStyles();
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill._id}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences
            .sort((a, b) => (a._updatedAt < b._updatedAt ? 1 : -1))
            .map((experience) => (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work) => (
                    <>
                      <motion.div
                        id={work.company}
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <Tooltip
                          classes={{
                            tooltip: classes.customTooltip,
                          }}
                          title={work.desc}
                          placement="top-start"
                        >
                          <div>
                          <h4 className="bold-text">{work.name}</h4>
                          <p className="p-text">{work.company}</p>
                          </div>
                          
                        </Tooltip>
                      </motion.div>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
