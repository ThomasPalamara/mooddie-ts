import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ROUTES from '../../constants/routes';
import { NavigationOptions, AuthNavigationOptions } from './navigationOptions';
import toConstCase from '../../utilities/toConstCase';
import { useAuthContext } from '../../contexts/Firebase/AuthUserContext';
// import { withAuthentication } from '../../contexts/Firebase/withAuthentication';
import { auth } from '../../contexts/Firebase';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    padding: theme.spacing(2),
  },
}));

const Navigation: React.FunctionComponent = () => {
  const authUser = useAuthContext();
  const options = authUser ? AuthNavigationOptions() : NavigationOptions();

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <div>
          {options.map(({ value, title }) => (
            <Link key={value} className={classes.link} to={ROUTES[toConstCase(value)]}>
              {title}
            </Link>
          ))}
        </div>
        <div>
          {authUser ? (
            <Button onClick={() => auth.doSignOut()}>Sign Out</Button>
          ) : (
            <>
              <Link className={classes.link} to="signUp">
                Sign Up
              </Link>
              <Link className={classes.link} to="signIn">
                Sign In
              </Link>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navigation);
