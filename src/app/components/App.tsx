import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Routes from './Navigation/Routes';
import '../styles/tailwind.css';
import { withAuthentication } from '../contexts/Firebase/withAuthentication';
import { firebase } from '../contexts/Firebase';
import { ToasterProvider } from '../contexts/Toaster';
import { Container } from '../library';

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
      <ToasterProvider>
        <Router>
          <Navigation />
          <Container className="pt-6">
            <Routes />
          </Container>
        </Router>
      </ToasterProvider>
    </div>
  );
};

export default withAuthentication(App);
