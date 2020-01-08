import React, { useState } from 'react';
import { getMonth, getYear } from 'date-fns';
import Calendar from './CalendarMonth';
import Operations from './Operations';
import CalendarOptions from './CalendarOptions';
import { CalendarOptions as CalendarOptionsType } from '../../utilities/types';

const Index: React.FunctionComponent = () => {
  const initialOptions = {
    display: 'year',
    month: getMonth(new Date()),
    year: getYear(new Date()),
  };
  const [options, setOptions] = useState(initialOptions);
  console.log('options calendar index:', options);
  return (
    <>
      <CalendarOptions handleOptionChange={(val: CalendarOptionsType) => setOptions(val)} />
      {options.year}
      <Operations />
      <Calendar year={options.year} month={options.month} />
    </>
  );
};

export default Index;
