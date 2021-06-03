import React from 'react';
import styled from 'styled-components';
import { ILoadingBar } from 'Models/loadingBar';
import LoadingBar from 'Components/shared/LoadingBar/LoadingBar';

interface ILoadingBarList {
  items: ILoadingBar[];
  title?: string;
}

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  opacity: 0.7;
  transition: all ease 0.3s;
`;

const Wrapper = styled.div`
  padding: 2rem;
  background: rgba(0, 0, 0, 0.1);
  &:hover {
    transition: all ease 0.3s;
    background: rgba(0, 0, 0, 0.6);
    ${Title} {
      opacity: 1;
    }
  }
`;

const LoadingBarList: React.FC<ILoadingBarList> = (props) => {
  return (
    <Wrapper>
      <Title>{props.title || ''}</Title>
      {props.items.map((item, idx) => (
        <LoadingBar key={idx} {...item} />
      ))}
    </Wrapper>
  );
};

export default LoadingBarList;
