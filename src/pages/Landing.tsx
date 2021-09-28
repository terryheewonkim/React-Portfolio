import styled from 'styled-components';
import { motion } from 'framer-motion';
// Animation
import { pageAnim } from '../animation';
// Components
import LandingIntro from '../components/LandingIntro';
import LandingProfile from '../components/LandingProfile';
import LandingDesc from '../components/LandingDesc';
import ContactBtn from '../components/ContactBtn';

const Landing = () => {
  return (
    <motion.div variants={pageAnim} initial="hidden" animate="show" exit="exit">
      <LandingIntro />
      <LandingProfile />
      <LandingDesc />
      <Btn>
        <ContactBtn />
      </Btn>
    </motion.div>
  );
};

const Btn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

export default Landing;
