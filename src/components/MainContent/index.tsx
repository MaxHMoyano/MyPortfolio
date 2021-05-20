import React from 'react';
import styled from 'styled-components';
import { Route, Switch, useLocation } from 'react-router-dom';
import Subtitle from '../shared/Subtitle';
import Title from '../shared/Title';
import Experience from '../Experience';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const MainContentWrapper = styled.div`
  padding: 4rem 10rem;
`;

const index: React.FC = () => {
  const location = useLocation();

  return (
    <MainContentWrapper>
      <TransitionGroup>
        <CSSTransition timeout={300} classNames={'fade'} key={location.key}>
          <Switch location={location}>
            <Route path={'/'} exact>
              <div>
                <Subtitle measure={'l'}>Hello! I'm</Subtitle>
                <Title measure={'xl'} content={'Maximiliano Moyano'} />
              </div>
            </Route>
            <Route path={'/skills'}></Route>
            <Route path={'/work'}></Route>
            <Route path={'/experience'}>
              <Experience />
            </Route>
            <Route path={'/contact'}></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </MainContentWrapper>
  );
};

export default index;
