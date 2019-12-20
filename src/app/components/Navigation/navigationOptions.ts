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
    value: 'sign_up',
    title: 'Sign up',
  },
  {
    value: 'sign_in',
    title: 'Sign in',
  },
];
export const AuthNavigationOptions = (): Array<NavigationOption> => [
  {
    value: 'home',
    title: 'Home',
  },
];
