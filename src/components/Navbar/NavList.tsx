import React from 'react';
import NavItem from './NavItem';
import { INavItem } from '../../models/navigation';
import styled from 'styled-components';

const NavListWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: 2rem 0;
`;

interface INavList {
  navItems: INavItem[];
}

const NavList: React.FC<INavList> = ({ navItems }) => {
  return (
    <NavListWrapper>
      {navItems.map((navItem, idx) => (
        <NavItem key={idx} {...navItem} />
      ))}
    </NavListWrapper>
  );
};

export default NavList;
