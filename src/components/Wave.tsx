import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wave = () => {
  return (
    <WaveSvg viewBox="0 0 1440 575" fill="none" xmlns="http://www.w3.org/2000/WaveSvg">
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        d="M-25 172C-25 172 176 561.5 420 569.5C664 577.5 1030 26.5 1211.5 6.49998C1393 -13.5 1464 185 1464 185"
        stroke="url(#paint0_linear)"
        strokeOpacity="0.6"
        strokeWidth="10"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1203.5"
          y1="318"
          x2="322"
          y2="344.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9255DC" />
          <stop offset="1" stop-color="#EC457F" />
        </linearGradient>
      </defs>
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  top: 6%;
  left: 0;
  z-index: -1;
`;

export default Wave;
