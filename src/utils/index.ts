import theme from 'Theme/theme';
import { keyframes } from 'styled-components';

export const getFontSizeByMeasure = (measure: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl') => {
  return theme.measures[measure] || theme.measures.m;
};

export const growth = (percentage: number) => keyframes`
  from {
    width: 0%;
  }

  to {
    width: ${percentage}%;
  }
`;
