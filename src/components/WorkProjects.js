import styled from 'styled-components';
import { motion } from 'framer-motion';
// animations
import { useScroll } from './useScroll';
import { fadeAnim } from '../animation';
// images
import ignite from '../assets/ignite.png';
import wavesD from '../assets/waves-d.png';
import wavesM from '../assets/waves-m.png';
import jsnotepen from '../assets/js-notepen.png';

const WorkProjects = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <>
      <WorkSection>
        <Text>
          <Title className="purple-header">IGNITE</Title>
          <p>
            An IMDB-like project for games. Users can search for games and see snapshots of the
            games, the platforms the game is available on, and the ratings of the game. Uses RAWG
            API to fetch game information.
          </p>
          <Links>
            <li>
              <a
                href="https://github.com/terryheewonkim/Ignite"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </Links>
        </Text>
        <div className="image">
          <img src={ignite} alt="Ignite project snapshot" />
        </div>
      </WorkSection>
      <WorkSection variants={fadeAnim} animate={controls} initial="hidden" ref={element}>
        <div className="image">
          <img src={wavesD} alt="Waves project snapshot" />
          <img src={wavesM} id="mobile" alt="Waves project mobile snapshot" />
        </div>
        <Text>
          <Title className="purple-header">WAVES</Title>
          <p>
            An online music player with responsive design fit for both desktop and mobile. Users can
            browse from a select number of royalty free songs that are retreived from chillhop.com
          </p>
          <Links>
            <li>
              <a
                href="https://github.com/terryheewonkim/Music-Player"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://waves-musicplayer.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Live
              </a>
            </li>
          </Links>
        </Text>
      </WorkSection>
      <WorkSection variants={fadeAnim} animate={controls2} initial="hidden" ref={element2}>
        <Text>
          <Title className="purple-header">JS-NOTEPEN</Title>
          <p>
            A CLI tool to launch an interactive development environment for writing and documenting
            code for JavaScript in a browser. Users can add code or text cells, and save their work
            into a local JS file.
          </p>
          <Links>
            <li>
              <a
                href="https://github.com/terryheewonkim/js-notepen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/js-notepen"
                target="_blank"
                rel="noopener noreferrer"
              >
                npmjs
              </a>
            </li>
          </Links>
        </Text>
        <div className="image">
          <img src={jsnotepen} alt="Ignite project snapshot" />
        </div>
      </WorkSection>
    </>
  );
};

const WorkSection = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 6rem;
  .image {
    position: relative;
    #mobile {
      position: absolute;
      bottom: -15%;
      right: -15%;
    }
  }
`;

const Text = styled.div`
  width: 35rem;
  p {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 3rem;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  li {
    margin-right: 5rem;
    a {
      font-size: 1.5rem;
      color: #1eddcc;
    }
  }
`;

export default WorkProjects;
