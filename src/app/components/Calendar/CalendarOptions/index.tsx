/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import Select, { ValueType } from 'react-select';
import { jsx } from '@emotion/core';
import { getYear } from 'date-fns';
import YearSelector from './YearSelector';
import MonthNavigation from './MonthNavigation';
import { CalendarOptions as CalendarOptionsType } from '../../../utilities/types';

interface Props {
  handleOptionChange: (arg0: CalendarOptionsType) => void;
}
type OptionType = { label: string; value: string };

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

  const onDisplayChange = (name: string, selected: any) => {
    setOptions(prev => ({ ...prev, [name]: selected }));
  };
  const handleChangeMonthNav = (year: number, month: number) => {
    setOptions(prev => ({ ...prev, year, month }));
    handleOptionChange(options);
  };

  const isOptionType = (e: ValueType<OptionType>): e is OptionType => {
    return (e as OptionType).value !== undefined;
  };

  return (
    <div>
      <Select
        css={{
          width: '300px',
        }}
        options={displayOptions}
        value={displayOptions.find(e => e.value === options.display)}
        onChange={selectedOption => {
          if (isOptionType(selectedOption)) onDisplayChange('display', selectedOption.value);
        }}
      />
      {options.display === 'month' ? (
        <MonthNavigation
          month={options.month}
          year={options.year}
          handleSelectMonth={handleChangeMonthNav}
        />
      ) : (
        <YearSelector
          handleYearChange={e => {
            onDisplayChange('year', e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default CalendarOptions;

// To show to Joe
// 'value' does not exist on type '{ value: string; label: string; } | OptionsType<{ value: string; label: string; }>'.
// if( Array.isArray(selectedOption) || selectedOption ===null || selectedOption === undefined){ return; }
