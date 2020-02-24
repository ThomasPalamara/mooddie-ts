import React from 'react';
import * as Styled from '../../styles/components/Calendar.style';
import { useModal } from '../../contexts/Modal';

const Day: React.FC<T.Day> = ({ date, dayState }) => {
  const { showMoodModal } = useModal();

  return (
    <Styled.Day dayState={dayState} type="button" onClick={() => showMoodModal(true, date)}>
      <span>{date.day}</span>
      {dayState}
    </Styled.Day>
  );
};

export default Day;
