import React from 'react';
import NavItem from 'Components/Navbar/NavItem/NavItem';
import { INavItem } from 'Models/navigation';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: 2rem 0;
`;

interface INavList {
  items: INavItem[];
}

const NavList: React.FC<INavList> = ({ items }) => {
  return (
    <Wrapper>
      {items.map((navItem, idx) => (
        <NavItem key={idx} {...navItem} />
      ))}
    </Wrapper>
  );
};

export default NavList;
