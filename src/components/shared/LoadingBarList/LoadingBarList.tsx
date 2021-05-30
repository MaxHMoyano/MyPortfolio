import React from 'react';
import styled from 'styled-components';
import { ILoadingBar } from 'Models/loadingBar';
import LoadingBar from '../LoadingBar/LoadingBar';

interface ILoadingBarList {
  items: ILoadingBar[];
}

const Wrapper = styled.div``;
const LoadingBarList: React.FC<ILoadingBarList> = (props) => {
  return (
    <Wrapper>
      {props.items.map((item, idx) => (
        <LoadingBar key={idx} {...item} />
      ))}
    </Wrapper>
  );
};

export default LoadingBarList;
