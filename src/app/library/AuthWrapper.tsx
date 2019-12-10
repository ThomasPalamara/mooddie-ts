import React from 'react';
import classNames from 'classnames';
import Card from './Card';
import Container from './Container';

interface Props {
  className?: string;
}

const AuthWrapper: React.FunctionComponent<Props> = ({ className, children, ...others }) => {
  const classes = classNames('', className);

  return (
    <div className={classes} {...others}>
      <Container className="max-w-md">
        <Card>{children}</Card>
      </Container>
    </div>
  );
};

export default AuthWrapper;
