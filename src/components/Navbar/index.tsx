import React, { useState } from 'react';
import styled from 'styled-components';
import { INavItem } from '../../models/navigation';
import NavList from './NavList';
import SocialsList from './SocialsList';
import Subtitle from '../shared/Subtitle';
import Title from '../shared/Title';

const NavbarWrapper = styled.div`
  background-color: transparent;
  padding: 2.5rem 5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.white};
  width: 100%;
`;

const LogoWrapper = styled.div`
  padding-bottom: 2rem;
  flex: 0 0 20%;
`;

const index: React.FC = () => {
  const [navItems] = useState<INavItem[]>([
    { name: 'About Me', icon: 'user' },
    { name: 'Skills', icon: 'user' },
    { name: 'Work', icon: 'user' },
    { name: 'Experience', icon: 'user' },
    { name: 'Contact', icon: 'user' },
  ]);

  return (
    <NavbarWrapper>
      <LogoWrapper>
        <Title measure={'m'} content={'Maximiliano'} />
        <Title measure={'m'} content={'Moyano'} />
        <Subtitle measure={'s'}>FullStack Developer</Subtitle>
      </LogoWrapper>
      <NavList navItems={navItems} />
      <SocialsList />
    </NavbarWrapper>
  );
};

export default index;
