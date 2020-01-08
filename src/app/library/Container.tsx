import React from 'react';
import styled from '@emotion/styled';

interface Props {
  className?: string;
}

const Container: React.FunctionComponent<Props> = ({ children, ...others }) => {
  const Element = styled.div`
    container {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    @media (min-width: 640px) {
      .container {
        max-width: 640px;
      }
    }
    @media (min-width: 768px) {
      .container {
        max-width: 768px;
      }
    }
    @media (min-width: 1024px) {
      .container {
        max-width: 1024px;
      }
    }
    @media (min-width: 1280px) {
      .container {
        max-width: 1280px;
      }
    }
  `;

  return <Element {...others}>{children}</Element>;
};

export default Container;
