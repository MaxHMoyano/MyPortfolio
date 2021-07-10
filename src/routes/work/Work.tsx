import { rgba as pol } from 'polished';
import React from 'react';
import styled from 'styled-components';
import NerdWallet from '../../assets/img/nerdwallet.png';
import Aloha from '../../assets/img/aloha.png';
interface ImgContainerI {
  colSpan?: number;
  rowSpan?: number;
}

const ImgHoverWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all ease 0.3s;
  opacity: 0;
  font-size: 2rem;
  color: white;
  background-color: ${pol('#000', 0.7)};
  padding: 2rem;
`;

const ImgContainer = styled.div<ImgContainerI>`
  position: relative;
  grid-column-start: span ${(props) => props.colSpan || 1};
  grid-row-start: span ${(props) => props.rowSpan || 1};
  /* border: 1px solid #fff; */
  background-color: transparent;
  opacity: 0.8;
  transition: all ease 0.3s;
  cursor: pointer;
  max-height: 100%;
  display: flex;
  &:hover {
    opacity: 1;
    box-shadow: 1rem 1rem 2rem black;
    > ${ImgHoverWrapper} {
      opacity: 1;
    }
  }
  img {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, minmax(250px, 1fr));
  grid-gap: 2rem;
`;

const Work: React.FC = () => {
  return (
    <Wrapper>
      <ImgContainer colSpan={2}>
        <img style={{ objectFit: 'contain' }} src={Aloha} />
        <ImgHoverWrapper>Aloha Dashboard</ImgHoverWrapper>
      </ImgContainer>
      <ImgContainer>
        <ImgHoverWrapper>Greatminds React-Components Library</ImgHoverWrapper>
      </ImgContainer>
      <ImgContainer rowSpan={2}>
        <ImgHoverWrapper>Amerian Hotels Management System</ImgHoverWrapper>
      </ImgContainer>
      <ImgContainer colSpan={1}>
        <ImgHoverWrapper>Argos Caterpillar Monitoring System</ImgHoverWrapper>
      </ImgContainer>
      <ImgContainer colSpan={2}>
        <img style={{ objectFit: 'fill' }} src={NerdWallet} />
        <ImgHoverWrapper>NerdWallet Insurance Preflow</ImgHoverWrapper>
      </ImgContainer>
    </Wrapper>
  );
};

export default Work;
