import React from 'react';
import styled from 'styled-components';
import { Route, Switch, useLocation } from 'react-router-dom';
import { About, Skills, Work, Experience, Contact } from 'Routes/index';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Wrapper = styled.div`
  padding: 0rem 10rem 4rem 10rem;
  > * {
    height: 100%;
  }
`;

const MainContent: React.FC = () => {
  const location = useLocation();

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default MainContent;
