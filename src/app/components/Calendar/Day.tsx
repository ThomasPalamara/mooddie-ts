import React from 'react';
// TODO: Try to finish popover component
import Popover from '../../library/Popover';
// import MoodPicker from 'components/Mood/MoodPicker';
import { Day as DayProps } from '../../utilities/interfaces';

const Day: React.FC<DayProps> = ({ day, month, year, dayState }) => {
  const btnClass = 'h-full w-full cursor-pointer';
  return (
    <Popover
      placement="topRight"
      trigger="click"
      // content={<MoodPicker day={day} month={month} year={year} />}
      content={<p>dsfsdfsd</p>}
    >
      <button type="button" className={btnClass}>
        {dayState}
      </button>
    </Popover>
  );
};

export default Day;
