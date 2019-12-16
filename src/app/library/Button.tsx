import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './types';

const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  theme = 'primary',
  children,
  type = 'button',
  onClick = () => {},
  ...others
}) => {
  const classes = classNames(
    `bg-${theme} hover:bg-${theme}-darker text-white py-2 px-4 rounded`,
    className,
  );

  return (
    <button type={type} className={classes} onClick={onClick} {...others}>
      {children}
    </button>
  );
};

export default Button;
