import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';

const SocialListWrapper = styled.div`
  flex-shrink: 0;
  height: 10vh;
  padding: 3rem 0 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.colors.primary};
`;

const SocialsList = () => {
  const [icons, setIcons] = useState([faGithub, faLinkedin]);
  return (
    <SocialListWrapper>
      {icons.map((icon, idx) => (
        <FontAwesomeIcon style={{ marginRight: '3rem' }} size={'3x'} key={idx} icon={icon} />
      ))}
    </SocialListWrapper>
  );
};

export default SocialsList;
