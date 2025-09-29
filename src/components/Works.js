import React from "react";
import "../styles/Works.css";
import { motion } from "framer-motion";
import { ProjectsData } from "../data/WorkData";
import WorkCard from "./WorkCard";

const Works = () => {

        const fade = {
                opacity: 1,
                transition: {
                        duration: 1.4,
                },
        };

        return (
                <div className='works' id='works'>
                        <div className='container'>
                                <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={fade}
                                        viewport={{ once: true }}
                                        className='heading'>
                                        <p className='heading-sub-text'>Featured work and creations</p>
                                        <p className='heading-text'>Projects</p>
                                </motion.div>

                                <motion.div
                                        className='projects-grid'
                                        initial={{ opacity: 0 }}
                                        whileInView={fade}
                                        viewport={{ once: true }}>
                                        {ProjectsData.map((project, index) => (
                                                <WorkCard project={project} key={index} />
                                        ))}
                                </motion.div>
                        </div>
                </div>
        );
};

export default Works;