import { IExperience } from 'Models/experience';
import React from 'react';
import styled from 'styled-components';
import { growth } from 'Utils/index';
import TimelineItem from './TimelineItem';
interface ITimeline {
  items: IExperience[];
}

const Wrapper = styled.div`
  background: transparent;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  align-items: center;
  perspective: 100px;
  &::after {
    z-index: 1;
    position: absolute;
    content: '';
    width: 0%;
    top: 50%;
    left: 0;
    border-top: 1px solid white;
    animation: ${(props) => growth(100)} 2s forwards;
  }
`;

const Timeline: React.FC<ITimeline> = (props) => {
  return (
    <Wrapper>
      {props.items.map((item, idx) => (
        <TimelineItem key={idx} {...item} />
      ))}
    </Wrapper>
  );
};

export default Timeline;
