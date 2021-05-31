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

const Bar = styled.div<ILoadingBar>`
  height: 0.25rem;
  background-color: ${(props) => (props.color ? props.color : props.theme.colors.primary)};
  border-radius: 10px;
  width: ${(props) => props.percentage}%;
  animation: ${(props) => growth(props.percentage)} 1s forwards;
  transition: all ease 0.3s;
  opacity: 0.9;
`;

const Name = styled.span`
  font-size: 2rem;
`;

const Time = styled.span`
  font-size: 1.5rem;
  opacity: 0;
  transition: all ease 0.3s;
`;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 3.5rem 0;
  height: 100px;
  &:hover {
    cursor: pointer;
    ${Bar} {
      height: 1rem;
      opacity: 1;
    }
    ${Time} {
      opacity: 1;
    }
  }
`;

const LoadingBar: React.FC<ILoadingBar> = (props) => {
  return (
    <Wrapper>
      <Container>
        <Bar {...props} />
        <Name>{props.name}</Name>
        <Time>&nbsp;-&nbsp;{props.time}</Time>
      </Container>
    </Wrapper>
  );
};

export default LoadingBar;
