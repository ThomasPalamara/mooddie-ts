import React from 'react';
import styled from '@emotion/styled';
import { Day as DayProps } from '../../utilities/types';
import { useModal } from '../../contexts/Modal';
import theme from '../../styles';

const Day: React.FC<DayProps> = ({ date, dayState }) => {
  const { showMoodModal } = useModal();

  const Button = styled.button`
    height: 100%;
    width: 100%;
    cursor: pointer;
    ${dayState && `background-color: ${theme.brand(dayState)}`};
  `;

  return (
    <Button type="button" onClick={() => showMoodModal(true, date)}>
      <span>{date.day}</span>
      {dayState}
    </Button>
  );
};

export default Day;
