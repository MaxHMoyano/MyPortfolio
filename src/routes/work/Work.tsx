import { rgba as pol } from 'polished';
import React from 'react';
import styled from 'styled-components';
import NerdWallet from '../../assets/img/nerdwallet.png';
import Aloha from '../../assets/img/aloha.png';
import Argos from '../../assets/img/argos.jpeg';
import Amerian from '../../assets/img/amerian.png';
import Greatminds from '../../assets/img/greatminds.png';
interface ImgContainerI {
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

const ImgContainer = styled.div<ImgContainerI>`
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
  return (
    <Wrapper>
      <ImgContainer colSpan={2}>
        <img style={{ objectFit: 'contain' }} src={Aloha} />
        <ImgHoverWrapper>
          <h3>Aloha Dashboard</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit modi, iure
            perspiciatis cumque velit adipisci tempore placeat aspernatur vero?
          </p>
        </ImgHoverWrapper>
      </ImgContainer>
      <ImgContainer colSpan={1}>
        <img style={{ objectFit: 'contain' }} src={Amerian} />
        <ImgHoverWrapper>
          <h3>Amerian Hotels Management System</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempore similique
            voluptas ipsa animi, vel id saepe architecto? Unde, inventore!
          </p>
        </ImgHoverWrapper>
      </ImgContainer>

      <ImgContainer rowSpan={2}>
        <img style={{ objectFit: 'fill' }} src={Argos} />
        <ImgHoverWrapper>
          <h3>Argos Caterpillar Monitoring System</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, totam earum at nemo
            sunt corrupti vel tenetur nostrum voluptate perferendis.
          </p>
        </ImgHoverWrapper>
      </ImgContainer>
      <ImgContainer>
        <img style={{ objectFit: 'fill' }} src={Greatminds} />
        <ImgHoverWrapper>
          <h3>Greatminds React-Components Library</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla assumenda hic recusandae
            deleniti animi. Nisi nihil reprehenderit corrupti expedita enim?
          </p>
        </ImgHoverWrapper>
      </ImgContainer>
      <ImgContainer colSpan={2}>
        <img style={{ objectFit: 'fill' }} src={NerdWallet} />
        <ImgHoverWrapper>
          <h3>NerdWallet Insurance Preflow</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at vel, quia quasi ea
            tempora fugit. At perspiciatis distinctio nesciunt.
          </p>
        </ImgHoverWrapper>
      </ImgContainer>
    </Wrapper>
  );
};

export default Work;
