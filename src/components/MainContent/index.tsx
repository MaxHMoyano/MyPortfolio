import React from 'react';
import styled from 'styled-components';
import { Route, Switch, useLocation } from 'react-router-dom';
import { About, Skills, Work, Experience, Contact } from '../../routes/';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const MainContentWrapper = styled.div`
  padding: 0rem 10rem 4rem 10rem;
`;

const TransitionGroupStyled = styled(TransitionGroup)`
  height: 100%;
  > * {
    height: inherit;
  }
`;

const index: React.FC = () => {
  const location = useLocation();

  return (
    <MainContentWrapper>
      <TransitionGroupStyled>
        <CSSTransition timeout={300} classNames={'fade'} key={location.key}>
          <Switch location={location}>
            <Route path={'/'} exact>
              <About />
            </Route>
            <Route path={'/skills'}>
              <Skills />
            </Route>
            <Route path={'/work'}>
              <Work />
            </Route>
            <Route path={'/experience'}>
              <Experience />
            </Route>
            <Route path={'/contact'}>
              <Contact />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroupStyled>
    </MainContentWrapper>
  );
};

export default index;
