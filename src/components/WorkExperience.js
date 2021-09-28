import styled from 'styled-components';
import { motion } from 'framer-motion';
// animations
import { useScroll } from './useScroll';
import { fadeAnim } from '../animation';
// Components
import ContactBtn from './ContactBtn';

const WorkExperience = () => {
  const [element, controls] = useScroll();

  return (
    <ExpSection variants={fadeAnim} animate={controls} initial="hidden" ref={element}>
      <div className="header">
        <h1 className="page-header">EXPERIENCE</h1>
        <div className="btn">
          <ContactBtn />
        </div>
      </div>
      <div className="experience-wrapper">
        <Experience>
          <h3 className="purple-header">FORMATTING ASSISTANT</h3>
          <span className="purple-header">Purdue University, 2018 - 2020</span>
          <p>
            Formatting documents and online content for universal design, with particular emphasis
            upon accessibility. Received projects from various Purdue professors as well as from the
            Teaching and Learning Technologies team, including graphic design jobs (logos, badges,
            flyers, etc.).
          </p>
          <a
            href="https://drive.google.com/file/d/1hinkARmnqmQwIxS7NPhpeVEksf7S5y7c/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Reference Letter
          </a>
        </Experience>
        <Experience>
          <h3 className="purple-header">TEACHING ASSISTANT</h3>
          <span className="purple-header">Coolgim Academy, 2017</span>
          <p>
            Worked as a math teacher assistant - helping students with questions, filling in
            lectures for those who missed class, communicating with parents for updates and
            questions, and general TA work for the academy.
          </p>
        </Experience>
      </div>
    </ExpSection>
  );
};

const ExpSection = styled(motion.div)`
  display: flex;
  .header {
    position: relative;
    .btn {
      position: absolute;
      left: 10%;
      top: 45%;
    }
  }
  & > * {
    width: 50%;
  }
`;

const Experience = styled.div`
  margin-bottom: 3rem;
  h3 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
  }
  span {
    display: inline-block;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.3rem;
    line-height: 1.8rem;
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.3rem;
  }
`;

export default WorkExperience;
