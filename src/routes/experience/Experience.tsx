import React, { useState } from 'react';
import styled from 'styled-components';
import { IExperience } from 'Models/experience';
import Timeline from 'Components/shared/Timeline/Timeline';

const Wrapper = styled.div``;

const ExperienceRoute: React.FC = () => {
  const experiences: IExperience[] = [
    {
      name: 'Qplus Software',
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
    {
      name: 'Intive SAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum odio ut enim scelerisque vulputate. Morbi ut congue purus.',
      from: 'January 2021',
      to: 'June 2021',
    },
    {
      name: 'Solvd Inc.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum odio ut enim scelerisque vulputate. Morbi ut congue purus.',
      from: 'June 2021',
      to: 'Present',
    },
  ];

  return (
    <Wrapper>
      <Timeline items={experiences} />
    </Wrapper>
  );
};

export default ExperienceRoute;
