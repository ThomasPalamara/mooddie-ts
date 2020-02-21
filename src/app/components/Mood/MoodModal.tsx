import React from 'react';
import { Modal, Container } from '@material-ui/core';
import { Date } from '../../types';

import MoodPicker from './MoodPicker';

interface MoodModalProps {
  date: Date;
  onClose: () => void;
  open: boolean;
}

const MoodModal: React.FC<MoodModalProps> = ({ open, onClose, date }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <MoodPicker date={date} />
      </Container>
    </Modal>
  );
};

export default MoodModal;
