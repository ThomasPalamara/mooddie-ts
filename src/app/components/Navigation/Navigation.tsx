import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import { NavigationOptions, AuthNavigationOptions } from './navigationOptions';
import toConstCase from '../../utilities/toConstCase';
import { Button } from '../../library';
import * as Styled from '../../styles/components/Navigation.style';
import { useAuthContext } from '../../contexts/Firebase/AuthUserContext';
// import { withAuthentication } from '../../contexts/Firebase/withAuthentication';
import { auth } from '../../contexts/Firebase';

const Navigation: React.FunctionComponent = () => {
  const authUser = useAuthContext();
  const options = authUser ? AuthNavigationOptions() : NavigationOptions();

  const NavLink = Styled.Link.withComponent(Link);

  return (
    <Styled.Wrapper>
      <div>
        {options.map(({ value, title }) => (
          <NavLink key={value} to={ROUTES[toConstCase(value)]}>
            {title}
          </NavLink>
        ))}
      </div>
      <div>
        {authUser ? (
          <Button onClick={() => auth.doSignOut()}>Sign Out</Button>
        ) : (
          <>
            <NavLink to="signUp">Sign Up</NavLink>
            <NavLink to="signIn">Sign In</NavLink>
          </>
        )}
      </div>
    </Styled.Wrapper>
  );
};

export default withRouter(Navigation);
