import React, { useState } from 'react';
import styled from 'styled-components';

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
const ExperiencesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const index = () => {
  const [experiences] = useState([
    {
      name: 'QPLUS SOFTWARE SOLUTIONS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum odio ut enim scelerisque vulputate. Morbi ut congue purus. Etiam malesuada ligula tellus, at dignissim dui malesuada a. Nunc in felis quis ante convallis laoreet. Nullam scelerisque quam purus, ac ornare justo malesuada vel. Vestibulum quis eleifend leo. Nunc mollis. ',
      time: '2 years',
    },
    {
      name: 'Corbis Studios',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum odio ut enim scelerisque vulputate. Morbi ut congue purus. Etiam malesuada ligula tellus, at dignissim dui malesuada a. Nunc in felis quis ante convallis laoreet. Nullam scelerisque quam purus, ac ornare justo malesuada vel. Vestibulum quis eleifend leo. Nunc mollis. ',
      time: '6 months',
    },
    {
      name: 'ESolutions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum odio ut enim scelerisque vulputate. Morbi ut congue purus. Etiam malesuada ligula tellus, at dignissim dui malesuada a. Nunc in felis quis ante convallis laoreet. Nullam scelerisque quam purus, ac ornare justo malesuada vel. Vestibulum quis eleifend leo. Nunc mollis. ',
      time: '5 months',
    },
    {
      name: 'Globant',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum odio ut enim scelerisque vulputate. Morbi ut congue purus. Etiam malesuada ligula tellus, at dignissim dui malesuada a. Nunc in felis quis ante convallis laoreet. Nullam scelerisque quam purus, ac ornare justo malesuada vel. Vestibulum quis eleifend leo. Nunc mollis. ',
      time: '6 months',
    },
    {
      name: 'Intive S.A',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum odio ut enim scelerisque vulputate. Morbi ut congue purus. Etiam malesuada ligula tellus, at dignissim dui malesuada a. Nunc in felis quis ante convallis laoreet. Nullam scelerisque quam purus, ac ornare justo malesuada vel. Vestibulum quis eleifend leo. Nunc mollis. ',
      time: '7 months',
    },
  ]);
  return (
    <ExperiencesWrapper>
      {experiences.map((experience, idx) => (
        <Experience key={idx}>
          <ExperienceContainer>
            <ExperienceName>{experience.name}</ExperienceName>
            <ExperienceDescription>{experience.description}</ExperienceDescription>
            <ExperienceTime>{experience.time}</ExperienceTime>
          </ExperienceContainer>
        </Experience>
      ))}
    </ExperiencesWrapper>
  );
};

export default index;
