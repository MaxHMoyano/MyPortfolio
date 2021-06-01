import React, { useState } from 'react';
import styled from 'styled-components';
// Local imports
import Card from 'Components/shared/Card/Card';
import { ICard } from 'Models/card';
import { faGithubAlt, faWhatsapp, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Contact: React.FC = () => {
  const [personalData, setPersonalData] = useState<ICard[]>([
    {
      title: 'An e-mail!',
      subtitle: 'maxhmoyano@gmail',
      icon: faTelegramPlane,
      action: () => {
        window.location.href = 'mailto:maxhmoyano@gmail.com';
      },
    },
    {
      title: 'A call maybe?',
      subtitle: '+54 3512766171',
      icon: faWhatsapp,
      action: () => {
        window.open('https://api.whatsapp.com/send?phone=+54 9 3512 76-6171', '_blank');
      },
    },
    {
      title: 'Or just a Star!',
      subtitle: 'github.com/MaxHMoyano',
      icon: faGithubAlt,
      action: () => {
        window.open('https://github.com/MaxHMoyano', '_blank');
      },
    },
  ]);

  return (
    <Wrapper>
      {personalData.map((item, idx) => (
        <Card key={idx} {...item} />
      ))}
    </Wrapper>
  );
};

export default Contact;
