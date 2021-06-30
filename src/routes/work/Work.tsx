import React from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div``;

const Wrapper = styled.div`
  column-count: 4;
`;

const Work: React.FC = () => {
  return (
    <Wrapper>
      <ImgContainer>
        <h2>Hello</h2>
      </ImgContainer>
      <ImgContainer>
        <h2>Hello</h2>
      </ImgContainer>
      <ImgContainer>
        <h2>Hello</h2>
      </ImgContainer>
      <ImgContainer>
        <h2>Hello</h2>
      </ImgContainer>
    </Wrapper>
  );
};

export default Work;
