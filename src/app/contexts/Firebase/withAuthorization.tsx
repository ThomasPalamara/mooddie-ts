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
      const { history } = this.props;
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authUser) {
          history.push(ROUTES.SIGN_IN);
        }
      });
    }

    public render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => {
            if (authUser) return <Component />;
            return <div />;
          }}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization as any);
};

export default withAuthorization;
