import styled from 'styled-components';
import { getFontSizeByMeasure } from '../../../util';

interface ISubtitle {
  measure?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}

const Subtitle = styled.h3<ISubtitle>`
  font-size: ${(props) => getFontSizeByMeasure(props.measure)};
  opacity: 0.8;
`;

export default Subtitle;
