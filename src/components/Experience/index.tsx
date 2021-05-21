import React, { useState } from 'react';
import styled from 'styled-components';
import { IExperience } from '../../models';
const ExperienceTime = styled.h3`
  opacity: 0;
  transition: all ease 0.3s;
  font-size: 1.5rem;
  border-top: 1px solid #ccc;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ExperienceDescription = styled.p`
  font-weight: bold;
  text-align: center;
`;
const ExperienceName = styled.h2`
  font-size: 2rem;
`;

const ExperienceContainer = styled.div`
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
  &:hover {
    height: 180px;
    > ${ExperienceTime} {
      opacity: 1;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
    }
  }
`;

const Experience = styled.div`
  flex: 0 0 30%;
  height: 180px;
  margin-bottom: 3rem;
`;

const index: React.FC<IExperience> = ({ name, description, time }) => {
  return (
    <Experience>
      <ExperienceContainer>
        <ExperienceName>{name}</ExperienceName>
        <ExperienceDescription>{description}</ExperienceDescription>
        <ExperienceTime>{time}</ExperienceTime>
      </ExperienceContainer>
    </Experience>
  );
};

export default index;
