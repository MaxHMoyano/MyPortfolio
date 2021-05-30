import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, RenderResult } from '@testing-library/react';
import NavItem from './NavItem';
import { INavItem } from '../../../models/navigation';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import 'jest-styled-components';

describe('NavItem Test Suite', () => {
  let component: RenderResult;
  const defaultProps: INavItem = {
    name: 'name of item',
    icon: 'icon',
    url: 'url',
  };
  beforeEach(() => {
    component = render(
      <ThemeProvider theme={theme}>
        <NavItem {...defaultProps} />
      </ThemeProvider>,
    );
  });

  it('should render', () => {
    // expect(component).toMatchSnapshot();
    expect(component.container).toHaveTextContent(defaultProps.name);
  });

  // it('should change colors when hover', () => {

  // })

  // it('should have default theme', () => {
  // expect(component).toMatchSnapshot()
  // });
});
