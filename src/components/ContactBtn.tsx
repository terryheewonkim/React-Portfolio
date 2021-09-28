import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContactBtn = () => {
  return <StyledLink to="/contact">CONTACT ME!</StyledLink>;
};

const StyledLink = styled(Link)`
  display: block;
  width: 21rem;
  height: 4rem;
  background: #c495fd;
  color: #212121;
  font-weight: 500;
  font-size: 2rem;
  text-align: center;
  line-height: 4rem;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #603891;
    color: #f5f5f5;
  }
`;

export default ContactBtn;
