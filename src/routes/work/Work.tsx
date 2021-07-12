import { rgba as pol } from 'polished';
import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import NerdWallet from '../../assets/img/nerdwallet.png';
import Aloha from '../../assets/img/aloha.png';
import Argos from '../../assets/img/argos.jpeg';
import Amerian from '../../assets/img/amerian.png';
import Greatminds from '../../assets/img/greatminds.png';
interface IProject {
  title: string;
  description: string;
  imgObjectFit: string;
  imgSrc: any;
  colSpan?: number;
  rowSpan?: number;
}

const ImgHoverWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  transition: all ease 0.3s;
  opacity: 0;
  color: white;
  background-color: ${pol('#000', 0.6)};
  padding: 2rem;
  > h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    display: inline-block;
    width: 75%;
  }

  > p {
    display: inline-block;
    width: 75%;
    font-size: 1.5rem;
  }
`;

const ImgContainer = styled.div<IProject>`
  position: relative;
  grid-column-start: span ${(props) => props.colSpan || 1};
  grid-row-start: span ${(props) => props.rowSpan || 1};
  /* border: 1px solid #fff; */
  background-color: transparent;
  transition: all ease 0.3s;
  cursor: pointer;
  max-height: 100%;
  display: flex;
  &:hover {
    transform: scale(1.05);
    box-shadow: 2rem 1rem 2rem black;
    > ${ImgHoverWrapper} {
      opacity: 1;
    }
  }
  img {
    object-fit: ${(props) => props.imgObjectFit};
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, minmax(250px, 1fr));
  grid-gap: 2rem;
`;

const Work: React.FC = () => {
  const projects: IProject[] = [
    {
      title: 'NerdWallet Insurance Preflow',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit modi, iurperspiciatis cumque velit adipisci tempore placeat aspernatur vero',
      imgObjectFit: 'fill',
      imgSrc: NerdWallet,
      colSpan: 2,
    },
    {
      title: 'Greatminds React-Components Library',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit modi, iurperspiciatis cumque velit adipisci tempore placeat aspernatur vero',
      imgObjectFit: 'cover',
      imgSrc: Greatminds,
    },
    {
      title: 'Argos Caterpillar Monitoring System',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit modi, iurperspiciatis cumque velit adipisci tempore placeat aspernatur vero',
      imgObjectFit: 'fill',
      imgSrc: Argos,
      rowSpan: 2,
    },
    {
      title: 'Amerian Hotels Management System',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit modi, iurperspiciatis cumque velit adipisci tempore placeat aspernatur vero',
      imgObjectFit: 'contain',
      imgSrc: Amerian,
    },
    {
      title: 'Aloha Dashboard',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit modi, iurperspiciatis cumque velit adipisci tempore placeat aspernatur vero',
      imgObjectFit: 'contain',
      imgSrc: Aloha,
      colSpan: 2,
    },
  ];

  return (
    <Wrapper>
      {projects.map((project, idx) => (
        <ImgContainer key={idx} {...project}>
          <img src={project.imgSrc} />
          <ImgHoverWrapper>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ImgHoverWrapper>
        </ImgContainer>
      ))}
    </Wrapper>
  );
};

export default Work;
