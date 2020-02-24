import React, { useState } from 'react';
import { getMonth, getYear } from 'date-fns';
import Month from './CalendarMonth';
import Year from './Calendar';
import Operations from './Operations';
import CalendarOptions from './CalendarOptions';

const Index: React.FunctionComponent = () => {
  const initialOptions = {
    display: 'year',
    month: getMonth(new Date()),
    year: getYear(new Date()),
  };
  const [options, setOptions] = useState(initialOptions);
  return (
    <>
      <CalendarOptions handleOptionChange={(val: T.CalendarOptions) => setOptions(val)} />
      {options.year}
      <Operations year={options.year} />
      {options.display === 'month' ? (
        <Month year={options.year} month={options.month} />
      ) : (
        <Year year={options.year} />
      )}
    </>
  );
};

export default Index;
