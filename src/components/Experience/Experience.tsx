import React from 'react';
import styled from 'styled-components';
import { IExperience } from 'Models/experience';

const Name = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.25rem;
`;

const Time = styled.p`
  opacity: 0.8;
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  height: 100%;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 1rem 1rem 16px #0007;
  cursor: pointer;
  transition: all ease 0.3s;
  opacity: 0.8;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 1rem 1rem 16px #000f;
    transform: translateY(0.5rem);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  height: 50vh;
`;

const Experience: React.FC<IExperience> = ({ name, description, from, to }) => {
  return (
    <Wrapper>
      <Container>
        <Name>{name}</Name>
        <Time>
          From {from} to {to}
        </Time>
        <Description>{description}</Description>
      </Container>
    </Wrapper>
  );
};

export default Experience;
