import React from 'react';
import "../styles/Journey.css"
import { FaGraduationCap, FaBriefcase, FaTrophy, FaCalendarAlt, FaCode } from "react-icons/fa"
import { motion } from "framer-motion";

const Journey = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="journey" id='journey'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">A chronicle of my professional evolution</p>
                    <p className='heading-text'>My Experience</p>
                </motion.div>
                <motion.div className="journey-timeline" whileInView={fade} initial={{opacity: 0}}>
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <FaBriefcase />
                        </div>
                        <div className="timeline-content">
                            <div className="timeline-date">
                                <FaCalendarAlt className="date-icon" />
                                <span>2023-2025</span>
                            </div>
                            <h3 className="timeline-title">Software Engineer   <span style={{color:"#64ffda"}}>North Coast Tech</span></h3>
                            <p className="timeline-company">Remote</p>
                            <p className="timeline-desc">I worked as a Software engineer, building and maintaining web applications using Python, Django, React, and AI technologies for sectors like e-commerce, healthcare, and education.</p>
                            <div className="timeline-skills">
                                <span>React</span>
                                <span>Python</span>
                                <span>Django</span>
                                <span>AI Chatbot</span>
                                <span>Genarative AI</span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <FaCode />
                        </div>
                        <div className="timeline-content">
                            <div className="timeline-date">
                                <FaCalendarAlt className="date-icon" />
                                <span>2021 - 2022</span>
                            </div>
                            <h3 className="timeline-title">Backend Developer  <span style={{color:"#64ffda"}}>LIVEN</span></h3>
                            <p className="timeline-company">Full Time</p>
                            <p className="timeline-desc">Specialized in building and maintaining web applications with Laravel, Django as the main framework, alongside React.js, and SQL.</p>
                            <div className="timeline-skills">
                                <span>Php</span>
                                <span>Pythong</span>
                                <span>Django</span>
                                <span>Laravel</span>
                                <span>React</span>
                                <span>SQL</span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <FaTrophy />
                        </div>
                        <div className="timeline-content">
                            <div className="timeline-date">
                                <FaCalendarAlt className="date-icon" />
                                <span>2019 - 2020</span>
                            </div>
                            <h3 className="timeline-title">Web Developer <span style={{color:"#64ffda"}}>INFAD</span></h3>
                            <p className="timeline-company">Full time</p>
                            <p className="timeline-desc">Developed web apps and websites with PHP, React.js, and Python scripts for automation.</p>
                            <div className="timeline-skills">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>Reactjs</span>
                                <span>Php</span>
                                <span>Python</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Journey;