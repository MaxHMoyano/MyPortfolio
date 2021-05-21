import React, { useState } from 'react';
import styled from 'styled-components';
import { IExperience } from '../../models';
import Experience from '../../components/Experience';
const ExperiencesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  row-gap: 3rem;
  column-gap: 5rem;
`;

const ExperiencePage: React.FC = () => {
  const [experiences] = useState<IExperience[]>([
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
        <Experience key={idx} {...experience} />
      ))}
    </ExperiencesWrapper>
  );
};

export default ExperiencePage;
