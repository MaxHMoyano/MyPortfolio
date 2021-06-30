import styled from 'styled-components';
import { getFontSizeByMeasure } from 'Utils/index';

interface ISubtitle {
  measure?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}

const Subtitle = styled.h2<ISubtitle>`
  font-size: ${(props) => getFontSizeByMeasure(props.measure)};
  opacity: 0.8;
`;

export default Subtitle;
