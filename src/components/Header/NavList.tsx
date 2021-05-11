import React from 'react';
import NavItem from './NavItem';
import { INavItem } from '../../models/navigation';
import styled from 'styled-components';

const NavListWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
`;

const NavList = ({ navItems }: { navItems: INavItem[] }) => {
  return (
    <NavListWrapper>
      {navItems.map((navItem, idx) => (
        <NavItem key={idx} title={navItem.name} icon={navItem.icon} />
      ))}
    </NavListWrapper>
  );
};

export default NavList;
