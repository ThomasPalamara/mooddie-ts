import React, { useState, useEffect } from 'react';
import Navigation from './Navigation/Navigation';
import Routes from './Navigation/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/tailwind.css';
import { withAuthentication } from '../contexts/Firebase/withAuthentication';
import { firebase } from '../contexts/Firebase';
import { ToasterProvider } from '../contexts/Toaster/Toaster';

const App = () => {
  const [, setauthUser] = useState(null);

  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser: any) => {
      authUser ? setauthUser(authUser) : setauthUser(null);
    });
  }, []);

  return (
    <div className="App">
      <ToasterProvider>
        <Router>
          <Navigation />
          <div className="pt-6">
            <Routes />
          </div>
        </Router>
      </ToasterProvider>
    </div>
  );
};

export default withAuthentication(App);
