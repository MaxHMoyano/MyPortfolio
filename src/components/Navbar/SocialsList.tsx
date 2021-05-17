import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';

const SocialListWrapper = styled.div`
  flex: 0 0 20%;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SocialsList = () => {
  const [icons] = useState([faGithub, faLinkedinIn]);
  return (
    <SocialListWrapper>
      {icons.map((icon, idx) => (
        <FontAwesomeIcon style={{ marginRight: '3rem' }} size={'3x'} key={idx} icon={icon} />
      ))}
    </SocialListWrapper>
  );
};

export default SocialsList;
