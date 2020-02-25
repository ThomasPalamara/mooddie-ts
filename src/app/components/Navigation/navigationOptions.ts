interface NavigationOption {
  value: string;
  title: string;
}

export const NavigationOptions = (): Array<NavigationOption> => [
  {
    value: 'landing',
    title: 'Landing',
  },
];
export const AuthNavigationOptions = (): Array<NavigationOption> => [
  {
    value: 'home',
    title: 'Home',
  },
];
