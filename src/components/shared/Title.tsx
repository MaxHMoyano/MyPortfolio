import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

const TitleContent = styled.h1`
  font-size: 3rem;
`;

const FirstLetter = styled.strong`
  color: ${(props) => props.theme.colors.primary};
`;

const Title: React.FC<ITitle> = ({ children, content }) => {
  const [firstLetter] = useState<string>(content.charAt(0));
  const [restOfContent] = useState<string>(content.substring(1));

  return (
    <Fragment>
      <TitleContent>
        <FirstLetter>{firstLetter}</FirstLetter>
        {restOfContent}
      </TitleContent>
    </Fragment>
  );
};

interface ITitle {
  content: string;
  size?: string;
}

export default Title;
