import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { INavItem } from 'Models/navigation';

const NavItemIcon = styled.i``;
const NavItemName = styled.span``;

const NavLinkStyled = styled(NavLink)`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  padding: 1.75rem 2rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white || 'white'};
  transition: all ease 0.3s;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${({ theme }) => theme.colors.primary};
    width: 0;
    transition: all ease 0.3s;
  }
  &:hover,
  &.active {
    color: ${(props) => props.theme.colors.primary || 'yellow'};
    opacity: 0.9;
    transform: translateY(0.25rem);
    &::after {
      width: 100%;
      left: 0;
    }
  }
`;

const NavItem: React.FC<INavItem> = (props) => {
  return (
    <NavLinkStyled exact to={props.url}>
      <NavItemIcon />
      <NavItemName>{props.name}</NavItemName>
    </NavLinkStyled>
  );
};

export default NavItem;
