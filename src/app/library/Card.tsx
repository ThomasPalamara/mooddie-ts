import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const Card: React.FunctionComponent<Props> = ({ className, ...others }) => {
  const classes = classNames('card', 'w-full p-5 bg-white rounded shadow-lg', className);

  return <div className={classes} {...others} />;
};

export default Card;
