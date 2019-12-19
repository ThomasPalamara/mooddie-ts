import React from 'react';
// TODO: Try to finish popover component
// import MoodPicker from 'components/Mood/MoodPicker';
import { Day as DayProps } from '../../utilities/interfaces';
import { useModal } from '../../contexts/Modal';

const Day: React.FC<DayProps> = ({ date, dayState }) => {
  const { showMoodModal } = useModal();
  const btnClass = 'h-full w-full cursor-pointer';
  return (
    <button type="button" onClick={() => showMoodModal(true, date)} className={btnClass}>
      {dayState}
    </button>
  );
};

export default Day;
