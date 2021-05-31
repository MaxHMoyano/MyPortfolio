import theme from '../theme/theme';

export const getFontSizeByMeasure = (measure: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl') => {
  return theme.measures[measure] || theme.measures.m;
};
