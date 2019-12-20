import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import { NavigationOptions, AuthNavigationOptions } from './navigationOptions';
import toConstCase from '../../utilities/toConstCase';
import { Button, Container } from '../../library';
import { useAuthContext } from '../../contexts/Firebase/AuthUserContext';
// import { withAuthentication } from '../../contexts/Firebase/withAuthentication';
import { auth } from '../../contexts/Firebase';

const Navigation: React.FunctionComponent = () => {
  const authUser = useAuthContext();
  const options = authUser ? AuthNavigationOptions() : NavigationOptions();

  return (
    <Container>
      <ul className="flex justify-start py-3">
        {options.map(({ value, title }) => (
          <Link key={value} className="p-3" to={ROUTES[toConstCase(value)]}>
            {console.log('value ', toConstCase(value))}
            {console.log('ROUTES[toConstCase(value)] :', ROUTES[toConstCase(value)])}
            {title}
          </Link>
        ))}
        {authUser && <Button onClick={() => auth.doSignOut()}>Sign Out</Button>}
      </ul>
    </Container>
  );
};

export default withRouter(Navigation);
