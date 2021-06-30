import React from 'react';
import styled from 'styled-components';
import { IExperience } from 'Models/experience';

interface ITimelineItem extends IExperience {}

const Heading = styled.h2`
  font-size: 1.75rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Time = styled.span`
  opacity: 0.9;
`;

const Description = styled.p`
  font-size: 1.3rem;
  margin-top: 2rem;
`;

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.dark};
  border-radius: 1rem;
  padding: 3rem;
  height: 250px;
  width: 15.6%;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  opacity: 0.8;
  transition: all ease 0.3s;
  &:last-child {
    margin-right: 0;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    top: -50%;
    left: 50%;
    height: 50%;
    border-left: 1px solid white;
  }
  &:nth-child(even) {
    transform: translateY(100%);
    &::after {
      top: -50%;
    }
    &:hover {
      transform: translate3d(0, 100%, 0.15rem);
    }
  }
  &:nth-child(odd) {
    transform: translateY(-100%);
    &::after {
      top: 100%;
    }
    &:hover {
      transform: translate3d(0, -100%, 0.15rem);
    }
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const TimelineItem: React.FC<ITimelineItem> = ({ name, from, to, description }) => {
  return (
    <Wrapper>
      <Heading>{name}</Heading>
      <Time>
        {from} - {to}
      </Time>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default TimelineItem;
