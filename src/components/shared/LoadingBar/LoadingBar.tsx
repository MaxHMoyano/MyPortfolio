import React from 'react';
import styled from 'styled-components';
import { ILoadingBar } from 'Models/loadingBar';
import { growth } from 'Utils/index';

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
      box-shadow: 2rem 1rem 2rem black;
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
