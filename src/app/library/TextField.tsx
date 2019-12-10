import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { TextFieldProps } from './types';

const TextField: React.FunctionComponent<TextFieldProps> = ({
  className,
  label: labelText,
  labelClassName,
  wrapperClassName,
  noWrapper,
  ...other
}) => {
  const classes = classNames(
    'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
    className,
  );
  const wrapperClasses = noWrapper ? classNames('text-field-wrapper mb-5', wrapperClassName) : '';
  const labelClasses = classNames('block text-gray-700 text-sm font-bold mb-3', labelClassName);

  return (
    <div className="wrapperClassName">
      {labelText && <label className={labelClasses}>{labelText}</label>}
      <input className={classes} {...other} />
    </div>
  );
};

TextField.defaultProps = {
  noWrapper: false,
};
export default TextField;
