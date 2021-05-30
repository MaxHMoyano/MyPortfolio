import LoadingBarList from 'Components/shared/LoadingBarList/LoadingBarList';
import React, { useState } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  column-gap: 2rem;
`;

const Skills: React.FC = () => {
  const [frontEnd, setFrontEnd] = useState([
    { name: 'ReactJs', percentage: 80, color: '#61dafb' },
    { name: 'AngularJs', percentage: 50, color: '#da3163' },
    { name: 'VueJs', percentage: 70, color: '#6cf143' },
    { name: 'Jest', percentage: 50, color: '#f8fb61' },
  ]);

  return (
    <Wrapper>
      <LoadingBarList items={frontEnd} />
    </Wrapper>
  );
};

export default Skills;
