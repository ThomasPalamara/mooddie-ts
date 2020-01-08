import React from 'react';
import { Modal, Container } from '../../library';
import { ModalProps } from '../../library/types';
import { Date } from '../../utilities/types';
import MoodPicker from './MoodPicker';

interface MoodModalProps extends ModalProps {
  date: Date;
}

const MoodModal: React.FC<MoodModalProps> = ({ show, onClose, date }) => {
  return (
    <Modal show={show} onClose={onClose} width={700}>
      <Container>
        <MoodPicker date={date} />
      </Container>
    </Modal>
  );
};

export default MoodModal;
