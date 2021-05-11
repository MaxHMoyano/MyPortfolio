import React, { useState } from 'react';
import styled from 'styled-components';
import { INavItem } from '../../models/navigation';
import NavList from './NavList';
import SocialsList from './SocialsList';
import Subtitle from './Subtitle';
import Title from './Title';

const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  width: 15vw;
  height: 100vh;
  padding: 2.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.white};
`;

const LogoWrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  padding-bottom: 2rem;
  margin-bottom: 1.5rem;
`;

const Header = () => {
  const [navItems, setNavItems] = useState<INavItem[]>([
    { name: 'About Me', icon: 'user' },
    { name: 'Skills', icon: 'user' },
    { name: 'Work', icon: 'user' },
    { name: 'Experience', icon: 'user' },
    { name: 'Contact', icon: 'user' },
  ]);

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Title>Maximiliano Moyano</Title>
        <Subtitle>FullStack Developer</Subtitle>
      </LogoWrapper>
      <NavList navItems={navItems} />
      <SocialsList />
    </HeaderWrapper>
  );
};

export default Header;
