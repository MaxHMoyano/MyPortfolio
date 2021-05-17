import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { getFontSizeByMeasure } from '../../util';
interface ITitle {
  content: string;
  measure?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}

const TitleContent = styled.h1<ITitle>`
  font-size: ${(props) => getFontSizeByMeasure(props.measure)};
`;

const FirstLetter = styled.strong`
  color: ${(props) => props.theme.colors.primary};
`;

const Title: React.FC<ITitle> = ({ children, content, measure }) => {
  const [firstLetter] = useState<string>(content.charAt(0));
  const [restOfContent] = useState<string>(content.substring(1));

  return (
    <Fragment>
      <TitleContent content={content} measure={measure}>
        <FirstLetter>{firstLetter}</FirstLetter>
        {restOfContent}
      </TitleContent>
    </Fragment>
  );
};

export default Title;
