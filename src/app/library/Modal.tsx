import React from 'react';
import { X } from 'react-feather';
import { ModalProps } from './types';
import Card from './Card';

const Modal: React.FunctionComponent<ModalProps> = ({ show, onClose, children }) => {
  return show ? (
    <div className="fixed pos-center">
      <Card>
        <X onClick={onClose} className="cursor-pointer absolute top-0 right-0" />
        {children}
      </Card>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
