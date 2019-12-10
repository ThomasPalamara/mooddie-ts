import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const Container: React.FunctionComponent<Props> = ({ className, children, ...others }) => {
  const classes = classNames('container mx-auto', className);

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  );
};

export default Container;
