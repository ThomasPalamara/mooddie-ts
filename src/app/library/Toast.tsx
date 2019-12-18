import React from 'react';
import classNames from 'classnames';
import { X } from 'react-feather';
import { ToastProps } from './types';

const Toast: React.FunctionComponent<ToastProps> = ({
  message,
  type,
  id,
  handleClose,
  ...others
}) => {
  const classes = classNames(
    `bg-${type}-lighter text-${type}`,
    `border border-solid border-${type} rounded-md`,
    'block mt-1 py-2 px-5',
    'flex justify-between',
  );

  return (
    <div className={classes} {...others}>
      {message}
      <X className="cursor-pointer" onClick={() => handleClose(id)} />
    </div>
  );
};

export default Toast;
