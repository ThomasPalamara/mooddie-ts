import React from 'react';
import classNames from 'classnames';
import { ToastProps } from './types';

const Toast: React.FunctionComponent<ToastProps> = ({ children, message, type, ...others }) => {
  const classes = classNames('bg-red-500');

  return (
    <div className={classes} {...others}>
      {message}
    </div>
  );
};

export default Toast;
