import React from 'react';
import _ from 'lodash';

interface Props {
  handleYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const YearSelector: React.FC<Props> = ({ handleYearChange }) => {
  const startYear = 2018;
  const actualYear = new Date().getFullYear();
  const years = _.range(startYear, actualYear + 2);
  return (
    <select defaultValue={actualYear} onChange={handleYearChange}>
      {years.map((year: number) => (
        <option key={year}>{year}</option>
      ))}
    </select>
  );
};

export default YearSelector;
