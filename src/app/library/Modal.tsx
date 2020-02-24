import React from 'react';
import { X } from 'react-feather';
import styled from '@emotion/styled';
import theme from '../styles/theme';
import { ModalProps } from './types';
import Card from './Card';

const Modal: React.FunctionComponent<ModalProps> = ({ show, onClose, width = 500, children }) => {
  const actualWidth = typeof width === 'number' ? `${width}px` : width;

  const Wrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: ${theme.colors.gray[200]}CC;
  `;
  const Content = styled.div`
    margin: 5rem auto;
    max-width: ${actualWidth};
  `;
  const CloseX = styled(X)`
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
  `;
  return show ? (
    <>
      <Wrapper onClick={onClose}>
        <Content>
          <Card>
            <CloseX onClick={onClose} />
            {children}
          </Card>
        </Content>
      </Wrapper>
    </>
  ) : (
    <></>
  );
};

export default Modal;
