import React, { useState } from 'react';
import styled from 'styled-components';
import { IExperience } from 'Models/experience';
import Experience from 'Components/Experience/Experience';
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 3rem;
  column-gap: 5rem;
  align-items: center;
`;

const ExperiencePage: React.FC = () => {
  const [experiences] = useState<IExperience[]>([
    {
      name: 'Qplus Software Solutions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum odio ut enim scelerisque vulputate. Morbi ut congue purus.',
      from: 'July 2017',
      to: 'November 2019',
    },
    {
      name: 'CorbisStudios',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum odio ut enim scelerisque vulputate. Morbi ut congue purus.',
      from: 'November 2019',
      to: 'July 2020',
    },
    {
      name: 'ESolutions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum odio ut enim scelerisque vulputate. Morbi ut congue purus.',
      from: 'July 2020',
      to: 'December 2020',
    },
    {
      name: 'Globant',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum odio ut enim scelerisque vulputate. Morbi ut congue purus.',
      from: 'December 2020',
      to: 'July 2021',
    },
  ]);

  return (
    <Wrapper>
      {experiences.map((experience, idx) => (
        <Experience key={idx} {...experience} />
      ))}
    </Wrapper>
  );
};

export default ExperiencePage;
