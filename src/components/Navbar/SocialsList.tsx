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

const SocialItem = styled(FontAwesomeIcon)`
  transition: all ease 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(0.25rem);
    color: ${(props) => props.theme.colors.primary};
  }
`;

const SocialsList: React.FC = () => {
  const iconStyle: React.CSSProperties = {
    marginRight: '3rem',
  };

  const [icons] = useState([faGithub, faLinkedinIn]);
  return (
    <SocialListWrapper>
      {icons.map((icon, idx) => (
        <SocialItem style={iconStyle} size={'3x'} key={idx} icon={icon} />
      ))}
    </SocialListWrapper>
  );
};

export default SocialsList;
