import React from 'react';
import { Modal, Button } from '../../library';
import { ModalProps } from '../../library/types';
import { Date } from '../../utilities/interfaces';
import { useCalendar } from '../../contexts/Calendar/CalendarStateContext';

interface MoodModalProps extends ModalProps {
  date: Date;
}

const MoodModal: React.FC<MoodModalProps> = ({ show, onClose, date }) => {
  const { setMood } = useCalendar();
  const updateMood = (mood: string) => {
    setMood(mood, date);
  };

  console.log('date :', date);
  return (
    <Modal show={show} onClose={onClose}>
      <div>
        <Button onClick={() => updateMood('happy')}>Happy</Button>
      </div>
    </Modal>
  );
};

export default MoodModal;
