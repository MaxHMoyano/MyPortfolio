import LoadingBarList from 'Components/shared/LoadingBarList/LoadingBarList';
import React, { useState } from 'react';
import { ILoadingBar } from 'Models/loadingBar';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  column-gap: 2rem;
`;

const Skills: React.FC = () => {
  const [frontEnd, setFrontEnd] = useState<ILoadingBar[]>([
    { name: 'HTML5', percentage: 100, color: '#fb9261', time: '5 years' },
    { name: 'CSS - Scss', percentage: 100, color: '#23c1ec', time: '5 years' },
    { name: 'Javascript', percentage: 90, color: '#e8f352', time: '5 years' },
    { name: 'ReactJS', percentage: 80, color: '#61dafb', time: '3 years' },
    { name: 'AngularJS', percentage: 50, color: '#da3163', time: '2 years' },
    { name: 'VueJS', percentage: 70, color: '#6cf143', time: '2 years' },
    { name: 'Jest', percentage: 50, color: '#f8fb61', time: '1.5 years' },
  ]);

  const [backEnd, setBackEnd] = useState<ILoadingBar[]>([
    { name: 'Nodejs', percentage: 40, time: '2 years', color: '#39ca39' },
    { name: 'ExpressJS', percentage: 40, time: '2 years', color: '#259dff' },
    { name: 'NestJS', percentage: 20, time: '1 years', color: '#ea2845' },
    { name: 'C# .NET', percentage: 20, time: '1 years', color: '#2c006c' },
  ]);

  const [database, setDatabase] = useState<ILoadingBar[]>([
    { name: 'MongoDB', percentage: 40, time: '2 years', color: '#14aa53' },
  ]);

  return (
    <Wrapper>
      <LoadingBarList title={'FrontEnd Technologies'} items={frontEnd} />
      <LoadingBarList title={'BackEnd Technologies'} items={backEnd} />
      <LoadingBarList title={'Database Technologies'} items={database} />
    </Wrapper>
  );
};

export default Skills;
