import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ILoadingBar } from 'Models/loadingBar';

const growth = (percentage: number) => keyframes`
  from {
    width: 0%;
  }

  to {
    width: ${percentage}%;
  }
`;

const Wrapper = styled.div`
  margin: 0.5rem 0 0.5rem 0;
  padding: 3rem 0 3rem 0;
  cursor: pointer;
`;

const Name = styled.h2``;

const Bar = styled.div<ILoadingBar>`
  height: 0.25rem;
  background-color: ${(props) => (props.color ? props.color : props.theme.colors.primary)};
  border-radius: 10px;
  width: ${(props) => props.percentage}%;
  animation: ${(props) => growth(props.percentage)} 1s forwards;
`;
const LoadingBar: React.FC<ILoadingBar> = (props) => {
  return (
    <Wrapper>
      <Bar {...props} />
      <Name>{props.name}</Name>
    </Wrapper>
  );
};

export default LoadingBar;
