import styled from 'styled-components';
import { motion } from 'framer-motion';
// Animation
import { pageAnim } from '../animation';
// Components
import WorkProjects from '../components/WorkProjects';
import WorkExperience from '../components/WorkExperience';

const Work = () => {
  return (
    <motion.div
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      className="page-style"
    >
      <h1 className="page-header">WORK</h1>
      <Skills className="pink-header">
        HTML • CSS • JAVASCRIPT • TYPESCRIPT • REACT • REDUX • GIT
      </Skills>
      <WorkProjects />
      <WorkExperience />
    </motion.div>
  );
};

const Skills = styled.span`
  display: inline-block;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 500;
`;

export default Work;
