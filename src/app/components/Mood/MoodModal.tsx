import React from 'react';
import { Modal } from '../../library';
import { ModalProps } from '../../library/types';
import { Date } from '../../utilities/types';
import MoodPicker from './MoodPicker';

interface MoodModalProps extends ModalProps {
  date: Date;
}

const MoodModal: React.FC<MoodModalProps> = ({ show, onClose, date }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <div>
        <MoodPicker date={date} />
      </div>
    </Modal>
  );
};

export default MoodModal;
