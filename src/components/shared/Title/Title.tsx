import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFontSizeByMeasure } from 'Utils/index';
interface ITitle {
  content: string;
  measure?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}

const TitleContent = styled.h1<ITitle>`
  font-size: ${(props) => getFontSizeByMeasure(props.measure)};
`;

const Strong = styled.strong`
  color: ${(props) => props.theme.colors.primary};
`;

const Title: React.FC<ITitle> = ({ content, measure }) => {
  const [formmatedContent, setFormmatedContent] = useState<JSX.Element[]>(null);

  useEffect(() => {
    let jsx = content.split(' ').map((word, idx) => (
      <React.Fragment key={idx}>
        <Strong>{word.charAt(0)}</Strong>
        <span>{word.substring(1)}&nbsp;</span>
      </React.Fragment>
    ));
    setFormmatedContent(jsx);
  }, []);

  return (
    <TitleContent content={content} measure={measure}>
      {formmatedContent}
    </TitleContent>
  );
};

export default Title;
