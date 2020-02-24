import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global } from '@emotion/core';
import Navigation from './Navigation/Navigation';
import Routes from './Navigation/Routes';
import { withAuthentication } from '../contexts/Firebase/withAuthentication';
import { firebase } from '../contexts/Firebase';
import { ToasterProvider } from '../contexts/Toaster';
import { ModalProvider } from '../contexts/Modal';
import { CalendarStateProvider } from '../contexts/Calendar/CalendarStateContext';
import * as Styled from '../styles/components/App.style';

const App = () => {
  const [, setauthUser] = useState(null);

  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser: any) => {
      if (authUser) setauthUser(authUser);
      else setauthUser(null);
    });
  }, []);

  return (
    <>
      <Global styles={{ html: { fontSize: '62.5%' } }} />
      <Styled.AppRoot>
        <CalendarStateProvider>
          <ToasterProvider>
            <ModalProvider>
              <Router>
                <Navigation />
                <Styled.ContentWrapper>
                  <Routes />
                </Styled.ContentWrapper>
              </Router>
            </ModalProvider>
          </ToasterProvider>
        </CalendarStateProvider>
      </Styled.AppRoot>
    </>
  );
};

export default withAuthentication(App);
