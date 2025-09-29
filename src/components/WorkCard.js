import React from "react";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

const WorkCard = ({ project }) => {
        return (
                <div className='project-card'>
                        <div className='project-image'>
                                <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", borderRadius: "8px" }} />
                        </div>
                        <div className='project-content'>
                                <h3 className='project-title'>{project.title}</h3>
                                <p className='project-description'>{project.desc}</p>
                                <div className='project-tech'>
                                        {project.tech.map((tech, index) => (
                                                <span key={index} className='tech-tag'>{tech}</span>
                                        ))}
                                </div>
                                <div className='project-links'>
                                        {project.gitlink && (
                                                <a 
                                                        href={project.gitlink} 
                                                        target='_blank' 
                                                        rel='noreferrer'
                                                        className='project-link github-link'>
                                                        <FiGithub />
                                                        GitHub
                                                </a>
                                        )}
                                        {project.site && (
                                                <a 
                                                        href={project.site} 
                                                        target='_blank' 
                                                        rel='noreferrer'
                                                        className='project-link demo-link'>
                                                        <IoOpenOutline />
                                                        Live Demo
                                                </a>
                                        )}
                                </div>
                        </div>
                </div>
        );
};

export default WorkCard;