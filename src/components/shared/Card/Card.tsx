import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICard } from 'Models/card';
import React from 'react';
import styled from 'styled-components';

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.secondary};
`;

const Title = styled.h2`
  font-size: 4.5rem;
`;
const Subtitle = styled.h4`
  font-size: 4rem;
  opacity: 0.7;
  transition: all ease 0.3s;
`;

const Wrapper = styled.div`
  width: 33.33%;
  height: 280px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  &:hover {
    ${Subtitle} {
      opacity: 1;
      transform: translateY(0.5rem);
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
const Card: React.FC<ICard> = ({ title, subtitle, icon, action }) => {
  return (
    <Wrapper onClick={() => action()}>
      <Icon icon={icon} size={'7x'} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
};

export default Card;
