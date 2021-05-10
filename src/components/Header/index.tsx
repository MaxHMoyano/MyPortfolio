import React from 'react';
import styled from 'styled-components';
import Subtitle from './Subtitle';
import Title from './Title';

const HeaderWrapper = styled.div`
  background-color: #000;
  width: 15vw;
  height: 100vh;
  padding: 2.5rem;
  display: flex;
  flex-flow: column nowrap;
  color: #eee;
`;

const LogoWrapper = styled.div`
  border-bottom: 1px solid #ccc;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Title>Maximiliano Moyano</Title>
        <Subtitle>FullStack Developer</Subtitle>
      </LogoWrapper>
    </HeaderWrapper>
  );
};

export default Header;
