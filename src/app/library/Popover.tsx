import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const Popover: React.FunctionComponent<Props> = ({ className, children, ...others }) => {
  const classes = classNames('', className);

  return (
    <>
      {children}
      <div>{content}</div>
    </>
  );
};

export default Popover;
