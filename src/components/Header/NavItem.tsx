import React, { Fragment } from 'react';
import styled from 'styled-components';
import { INavItem } from '../../models/navigation';

const NavItemIcon = styled.i``;
const NavItemName = styled.span``;

const NavItemButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  padding: 1.75rem 0;
  width: 100%;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white || 'white'};
  transition: all ease 0.3s;
  font-weight: bold;
  text-align: left;
  &:hover {
    color: ${(props) => props.theme.colors.primary || 'yellow'};
    opacity: 0.9;
    transform: translateX(0.5rem);
  }
`;

const NavItem: React.FC<INavItem> = (props) => {
  return (
    <Fragment>
      <NavItemButton>
        <NavItemIcon />
        <NavItemName>{props.name}</NavItemName>
      </NavItemButton>
    </Fragment>
  );
};

export default NavItem;
