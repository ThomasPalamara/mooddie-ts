import _ from 'lodash';
interface NavigationOption {
  value: string;
  title: string;
}

export const NavigationOptions = (): Array<NavigationOption> => [
  {
    value: 'landing',
    title: 'Landing',
  },
  {
    value: 'signUp',
    title: 'Sign up',
  },
  {
    value: 'signIn',
    title: 'Sign in',
  },
];
export const AuthNavigationOptions = (): Array<NavigationOption> => [
  {
    value: 'home',
    title: 'Home',
  },
];
