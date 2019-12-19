import React, { useState } from 'react';
import Calendar from './Calendar';
import YearSelector from './YearSelector';

const Index: React.FunctionComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // TODO check why it's not a number
    setYear(Number(e.target.value));
  };
  return (
    <>
      <YearSelector handleYearChange={handleYearChange} />
      {year}
      <Calendar year={year} />
    </>
  );
};

export default Index;
