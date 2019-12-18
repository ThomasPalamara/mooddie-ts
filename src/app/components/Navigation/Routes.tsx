import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../Landing';
import Signup from '../Auth/Signup';
import Login from '../Auth/Login';
import Calendar from '../Calendar';
// import PasswordForgetPage from '../PasswordForget';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';

import ROUTES from '../../constants/routes';

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route exact path={ROUTES.LANDING} component={Landing} />
    <Route path={ROUTES.HOME} component={Calendar} />
    <Route path={ROUTES.SIGN_UP} component={Signup} />
    <Route path={ROUTES.SIGN_IN} component={Login} />
    {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
  </Switch>
);

export default Routes;
