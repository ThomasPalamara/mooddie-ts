import * as React from 'react';
import { withRouter } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import { firebase } from '.';
import { AuthUserContext } from './AuthUserContext';

interface InterfaceProps {
  history?: any;
}

export const withAuthorization = (Component: React.FC) => {
  class WithAuthorization extends React.Component<InterfaceProps, {}> {
    public componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authUser) {
          this.props.history.push(ROUTES.SIGN_IN);
        }
      });
    }

    public render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => {
            console.log('authUser :', authUser);
            if (authUser) return <Component />;
          }}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization as any);
};
