import React from 'react';
import NavItem from './NavItem';
import { INavItem } from '../../models/navigation';
import styled from 'styled-components';

const NavListWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
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
        <NavItem key={idx} name={navItem.name} icon={navItem.icon} />
      ))}
    </NavListWrapper>
  );
};

export default NavList;
