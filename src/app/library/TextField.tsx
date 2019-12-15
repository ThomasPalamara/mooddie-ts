import React from 'react';
import classNames from 'classnames';
import { TextFieldProps } from './types';

const TextField: React.FunctionComponent<TextFieldProps> = ({
  className,
  label: labelText,
  labelClassName,
  wrapperClassName,
  noWrapper,
  error,
  ...other
}) => {
  console.log('error :', error);
  const classes = classNames(
    'appearance-none',
    'block w-full',
    'bg-gray-200 text-gray-700 border border-gray-200 rounded',
    'py-3 px-4',
    'leading-tight',
    'focus:outline-none focus:bg-white focus:border-gray-500',
    className,
  );
  const labelClasses = classNames(
    'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1',
    labelClassName,
  );
  const wrapperClasses = noWrapper
    ? ''
    : classNames('text-field-wrapper mb-6 relative', wrapperClassName);
  const errorClasses = classNames('absolute text-error text-xs bottom-2 right-0');

  return (
    <div className={wrapperClasses}>
      {labelText && <label className={labelClasses}>{labelText}</label>}
      <input className={classes} {...other} />
      {error && <div className={errorClasses}>{error}</div>}
    </div>
  );
};

TextField.defaultProps = {
  noWrapper: false,
};
export default TextField;
