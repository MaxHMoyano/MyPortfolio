import React, { Fragment } from 'react';
import styled from 'styled-components';

const NavItemIcon = styled.i``;
const NavITemTitle = styled.span``;

const NavItemButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  padding: 1.5rem 0;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: all ease 0.3s;
  font-weight: bold;
  text-align: left;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    opacity: 0.9;
    transform: translateY(0.25rem);
  }
`;

const NavItem = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <Fragment>
      <NavItemButton>
        <NavItemIcon />
        <NavITemTitle>{title}</NavITemTitle>
      </NavItemButton>
    </Fragment>
  );
};

export default NavItem;
