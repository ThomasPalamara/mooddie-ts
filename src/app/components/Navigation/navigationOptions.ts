interface NavigationOption {
  value: string;
  title: string;
}

const NavigationOptions = (): Array<NavigationOption> => [
  {
    value: 'landing',
    title: 'Home',
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

export default NavigationOptions;
