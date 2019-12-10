import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import navigationOptions from './navigationOptions';
import toConstCase from '../../utilities/toConstCase';

const Navigation: React.FunctionComponent = () => {
  const options = navigationOptions();
  return (
    <ul className="flex">
      {options.map(({ value, title }) => (
        <Link key={value} className="flex-1" to={ROUTES[toConstCase(value)]}>
          {title}
        </Link>
      ))}
    </ul>
  );
};

export default withRouter(Navigation);
