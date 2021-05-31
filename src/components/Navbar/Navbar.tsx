import React, { useState } from 'react';
import styled from 'styled-components';
import { INavItem } from 'Models/navigation';
import NavList from 'Components/Navbar/NavList/NavList';
import SocialsList from 'Components/Navbar/SocialList/SocialsList';
import Subtitle from 'Components/shared/Subtitle/Subtitle';
import Title from 'Components/shared/Title/Title';

const Wrapper = styled.div`
  background-color: transparent;
  padding: 2.5rem 10rem;
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
const Navbar: React.FC = () => {
  const [navItems] = useState<INavItem[]>([
    { name: 'About Me', icon: 'user', url: '/' },
    { name: 'Skills', icon: 'user', url: 'skills' },
    { name: 'Work', icon: 'user', url: 'work' },
    { name: 'Experience', icon: 'user', url: 'experience' },
    { name: 'Contact', icon: 'user', url: 'contact' },
  ]);

  return (
    <Wrapper>
      <LogoWrapper>
        <Title measure={'m'} content={'Maximiliano'} />
        <Title measure={'m'} content={'Moyano'} />
        <Subtitle measure={'s'}>FullStack Developer</Subtitle>
      </LogoWrapper>
      <NavList items={navItems} />
      <SocialsList />
    </Wrapper>
  );
};

export default Navbar;
