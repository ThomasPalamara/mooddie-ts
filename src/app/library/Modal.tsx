import React from 'react';
import classNames from 'classnames';
import { X } from 'react-feather';
import { ModalProps } from './types';
import Card from './Card';

const Modal: React.FunctionComponent<ModalProps> = ({ show, onClose, children }) => {
  return show ? (
    <div className="fixed pos-center bg-error">
      <X onClick={onClose} />
      <Card>{children}</Card>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
