import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import { getYear } from 'date-fns';
import YearSelector from './YearSelector';
import MonthNavigation from './MonthNavigation';
import { CalendarOptions as CalendarOptionsType } from '../../../utilities/types';

interface Props {
  handleOptionChange: (arg0: CalendarOptionsType) => void;
}
const CalendarOptions: React.FC<Props> = ({ handleOptionChange }) => {
  const displayOptions = [
    { value: 'year', label: 'Year' },
    { value: 'month', label: 'Month' },
  ];
  const [options, setOptions] = useState({
    display: displayOptions[0].value,
    month: 0,
    year: getYear(new Date()),
  });
  useEffect(() => {
    handleOptionChange(options);
  }, [options]);

  const onchange = (name: string, selected: any) => {
    setOptions(prev => ({ ...prev, [name]: selected.value }));
  };
  const handleChangeMonthNav = (year: number, month: number) => {
    setOptions(prev => ({ ...prev, year, month }));
    handleOptionChange(options);
  };

  return (
    <>
      <Select
        options={displayOptions}
        value={displayOptions.find(e => e.value === options.display)}
        onChange={selected => onchange('display', selected)}
      />
      {options.display === 'month' ? (
        <MonthNavigation
          month={options.month}
          year={options.year}
          handleSelectMonth={handleChangeMonthNav}
        />
      ) : (
        <YearSelector handleYearChange={e => onchange('year', e.target.value)} />
      )}
    </>
  );
};

export default CalendarOptions;
