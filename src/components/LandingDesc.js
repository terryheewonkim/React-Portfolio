import styled from 'styled-components';
import { motion } from 'framer-motion';
// Animation
import { useScroll } from './useScroll';
import { fadeAnim } from '../animation';

const LandingDesc = () => {
  const [element, controls] = useScroll();

  return (
    <DescWrapper variants={fadeAnim} animate={controls} initial="hidden" ref={element}>
      <Description>
        <h3>Hi there!</h3>
        <p>
          I am a recent graduate from Purdue University with a bachelor's degree in Computer
          Graphics Technology. I have an imaginative mind that loves to generate new ideas and the
          technical skills to make those ideas into reality in the form of aesthetically pleasing
          and functional web sites/applications.
        </p>
        <p>
          Currently my focus is on looking for an entry level job in front-end development that will
          help me explore my interests in the web development field and enhance my knowledge, as
          well as further motivate me to grow as a professional.
        </p>
      </Description>
      <Description className="korean">
        <h3>안녕하세요!</h3>
        <p>
          저는 최근에 미국에 있는 퍼듀 대학교에서 컴퓨터 그래픽 테크놀로지 전공으로 졸업하여 한국에
          귀국해있는 프론트엔드 개발자 취업 지망생입니다. 항상 웹과 모바일쪽에 관심이 있던 저는
          창의적인 면이 조금 더 있는 프론트엔드 쪽으로 발을 딛고 후에 백엔드를 익혀 풀스택으로
          나아가는것이 꿈입니다.
        </p>
        <p>
          현재는 저의 개발자로서의 꿈을 현실로 발현할 수 있고 전문적으로 성장할 수 있게 도와줄
          기업을 찾기 위해 저의 기술 스택을 꾸준히 늘려가고 있는 중입니다!
        </p>
      </Description>
    </DescWrapper>
  );
};

const DescWrapper = styled(motion.div)`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-around;
  .korean {
    font-family: 'Pretendard-Regular', sans-serif;
    letter-spacing: 1px;
  }
`;

const Description = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    line-height: 1.5rem;
  }
  & > * {
    margin-bottom: 1rem;
  }
`;

export default LandingDesc;
