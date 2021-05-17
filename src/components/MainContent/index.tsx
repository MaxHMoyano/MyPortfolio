import React from 'react';
import styled from 'styled-components';
import Subtitle from '../shared/Subtitle';
import Title from '../shared/Title';

const MainContentWrapper = styled.div`
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const index = () => {
  return (
    <MainContentWrapper>
      <Subtitle measure={'l'}>Hello! I'm</Subtitle>
      <Title measure={'xl'} content={'Maximiliano Moyano'} />
    </MainContentWrapper>
  );
};

export default index;
