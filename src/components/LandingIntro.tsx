import styled from 'styled-components';
import { motion } from 'framer-motion';
// animation
import { titleAnim } from '../animation';
// wave
import Wave from './Wave';

const LandingIntro = () => {
  return (
    <Intro>
      <Hide>
        <motion.h1 variants={titleAnim} className="t1">
          CREATIVE
        </motion.h1>
      </Hide>
      <Hide>
        <motion.h1 variants={titleAnim} className="t2">
          <span>FRONT-END</span>
        </motion.h1>
      </Hide>
      <Hide>
        <motion.h1 variants={titleAnim} className="t3">
          DEV
        </motion.h1>
      </Hide>
      <Wave />
    </Intro>
  );
};

// Styled Components
const Intro = styled(motion.div)`
  min-height: 90vh;
  position: relative;
  h1 {
    position: relative;
    font-weight: 500;
    font-size: 7.5rem;
  }
  span {
    color: #1eddcc;
  }

  .t1 {
    margin-top: 3rem;
    left: 10%;
  }
  .t2 {
    margin-top: 4.5rem;
    left: 30%;
  }
  .t3 {
    margin-top: 4.5rem;
    left: 68%;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default LandingIntro;
