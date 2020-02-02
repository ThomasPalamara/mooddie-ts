import React from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import theme from '../styles';

interface Props {
  className?: string;
}

const Card: React.FunctionComponent<Props> = ({ className, ...others }) => {
  const classes = classNames('card', 'w-full p-5 bg-white rounded shadow-lg', className);

  const Card = styled.div({
    width: '100%',
    padding: theme.space(3),
  });
  return <Card className={classes} {...others} />;
};

export default Card;
