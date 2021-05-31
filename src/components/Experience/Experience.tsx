import React, { useState } from 'react';
import styled from 'styled-components';
import { IExperience } from 'Models/experience';
const Time = styled.h3`
  opacity: 0;
  transition: all ease 0.3s;
  font-size: 1.5rem;
  border-top: 1px solid #ccc;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.25rem;
`;
const Name = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  height: 150px;
  padding: 2rem;
  border-radius: 2rem;
  transition: all ease 0.3s;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    height: 180px;
    transform: translateY(0.5rem);
    background-color: rgba(255, 255, 255, 0.2);
    opacity: 1;
    > ${Time} {
      opacity: 1;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
    }
  }
`;

const Wrapper = styled.div`
  flex: 0 0 30%;
  height: 180px;
  margin-bottom: 3rem;
`;

const Experience: React.FC<IExperience> = ({ name, description, time }) => {
  return (
    <Wrapper>
      <Container>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Time>{time}</Time>
      </Container>
    </Wrapper>
  );
};

export default Experience;
