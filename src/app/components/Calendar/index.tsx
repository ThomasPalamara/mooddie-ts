import React, { useState } from 'react';
import Calendar from './Calendar';
import YearSelector from './YearSelector';
import { CalendarStateProvider } from '../../contexts/Calendar/CalendarStateContext';

const Index: React.FunctionComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // TODO check why it's not a number
    setYear(Number(e.target.value));
  };
  return (
    <CalendarStateProvider>
      <YearSelector handleYearChange={handleYearChange} />
      {year}
      <Calendar year={year} />
    </CalendarStateProvider>
  );
};

export default Index;
