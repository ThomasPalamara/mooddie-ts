import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import Navigation from './Navigation/Navigation';
import Routes from './Navigation/Routes';
import '../styles/tailwind.css';
import { withAuthentication } from '../contexts/Firebase/withAuthentication';
import { firebase } from '../contexts/Firebase';
import { ToasterProvider } from '../contexts/Toaster';
import { CalendarStateProvider } from '../contexts/Calendar/CalendarStateContext';
import { ModalProvider } from '../contexts/Modal';
import theme from '../styles/theme';

const App = () => {
  const [, setauthUser] = useState(null);

  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser: any) => {
      if (authUser) setauthUser(authUser);
      else setauthUser(null);
    });
  }, []);

  return (
    <div className="App">
      <CalendarStateProvider>
        <ThemeProvider theme={theme}>
          <ToasterProvider>
            <ModalProvider>
              <Router>
                <Navigation />
                <div style={{ paddingTop: '1rem' }}>
                  <Routes />
                </div>
              </Router>
            </ModalProvider>
          </ToasterProvider>
        </ThemeProvider>
      </CalendarStateProvider>
    </div>
  );
};

export default withAuthentication(App);
