import styled from 'styled-components';
// Animation
import { motion } from 'framer-motion';
import { fadeAnim } from '../animation';
import { useScroll } from './useScroll';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
// images
import profileImg from '../assets/Terry-profile.png';
import kr from '../assets/KR.png';
import eg from '../assets/EG.png';
import ae from '../assets/AE.png';
import sg from '../assets/SG.png';
import us from '../assets/US.png';

const LandingProfile = () => {
  const [element, controls] = useScroll();

  return (
    <Profile variants={fadeAnim} animate={controls} initial="hidden" ref={element}>
      <div className="profile-img">
        <img src={profileImg} alt="Terry" />
      </div>
      <div className="journey-wrapper">
        <h2>MY JOURNEY!</h2>
        <Countries>
          <div className="flag">
            <img src={kr} alt="Koreaflag" />
            <span className="tooltip">8 years</span>
          </div>
          <FontAwesomeIcon icon={faCaretRight} color="white" size="3x" />
          <div className="flag">
            <img src={eg} alt="Egypt flag" />
            <span className="tooltip">4 years</span>
          </div>
          <FontAwesomeIcon icon={faCaretRight} color="white" size="3x" />
          <div className="flag">
            <img src={ae} alt="United Arab Emirates flag" />
            <span className="tooltip">1 year</span>
          </div>
          <FontAwesomeIcon icon={faCaretRight} color="white" size="3x" />
          <div className="flag">
            <img src={sg} alt="Singapore flag" />
            <span className="tooltip">6 months</span>
          </div>
          <FontAwesomeIcon icon={faCaretRight} color="white" size="3x" />
          <div className="flag">
            <img src={ae} alt="United Arab Emirates flag" />
            <span className="tooltip">2 years</span>
          </div>
          <FontAwesomeIcon icon={faCaretRight} color="white" size="3x" />
          <div className="flag">
            <img src={sg} alt="Singapore flag" />
            <span className="tooltip">3 years</span>
          </div>
          <FontAwesomeIcon icon={faCaretRight} color="white" size="3x" />
          <div className="flag">
            <img src={us} alt="United States flag" />
            <span className="tooltip">5 years</span>
          </div>
          <FontAwesomeIcon icon={faCaretRight} color="white" size="3x" />
          <div className="flag">
            <img src={kr} alt="Korea flag" />
            <span className="tooltip">current!</span>
          </div>
        </Countries>
      </div>
    </Profile>
  );
};

const Profile = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  .profile-img {
    margin-bottom: 2rem;
  }
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .journey-wrapper {
    width: 100%;
  }
`;

const Countries = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .flag {
    position: relative;
    .tooltip {
      visibility: hidden;
      width: 100%;
      background: #c495fd;
      text-align: center;
      padding: 0.4rem 0;
      border-radius: 5px;
      position: absolute;
      left: 0;
      bottom: 125%;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }
  /* tooltip arrow */
  .flag .tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #c495fd transparent transparent transparent;
  }
  .flag:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

export default LandingProfile;
