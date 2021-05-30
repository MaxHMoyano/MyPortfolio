import React from 'react';
import styled from 'styled-components';
import Subtitle from '../../components/shared/Subtitle/Subtitle';
import Title from '../../components/shared/Title/Title';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Information = styled.div`
  flex: 0 0 50%;
`;

const About: React.FC = () => {
  return (
    <Wrapper>
      <Information>
        <Subtitle measure={'xl'}>Hello! I'm</Subtitle>
        <Title measure={'xxl'} content={'Maximiliano Moyano'} />
        <p style={{ fontSize: '2.25rem', fontWeight: 'bold', opacity: '0.8' }}>
          I'm a full stack Javascript developer with 3+ years of experience so far,I'm specialized
          in Front-End development, mostly with ReactJs and Angular 2+
        </p>
      </Information>
    </Wrapper>
  );
};

export default About;
