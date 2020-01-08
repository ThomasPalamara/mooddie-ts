import React, { useContext } from 'react';
import { Button } from '../../library';

import getDaysInMonth from '../../utilities/getDaysInMonth';
import moods from '../../constants/moods';
import { useCalendar } from '../../contexts/Calendar/CalendarStateContext';

const Operations = props => {
  const { setYearData } = useCalendar();

  const resetCalendar = e => {
    setYearData({});
  };
  const generateRandomData = () => {
    const year = 2019;
    const objReturned = { [year]: {} };
    for (let i = 1; i <= 12; i++) {
      objReturned[year][i] = {};
      for (let j = 0; j <= getDaysInMonth(i, year); j++) {
        objReturned[year][i][j] = moods[Math.floor(Math.random() * moods.length)];
      }
    }

    setYearData(objReturned);
  };
  return (
    <div>
      <Button onClick={resetCalendar}>Reset</Button>
      <Button onClick={generateRandomData}>Random</Button>
    </div>
  );
};

Operations.propTypes = {};

export default Operations;
