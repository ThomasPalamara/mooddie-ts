import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import getDaysInMonth from '../../utilities/getDaysInMonth';
import moods from '../../constants/moods';
import { useCalendar } from '../../contexts/Calendar/CalendarStateContext';

const Operations = ({ year }) => {
  const { setYearData, resetCalendar } = useCalendar();

  const generateRandomData = () => {
    const objReturned = { [year]: {} };
    for (let i = 0; i <= 11; i++) {
      objReturned[year][i] = {};
      for (let j = 0; j <= getDaysInMonth(i, year); j++) {
        objReturned[year][i][j] = moods[Math.floor(Math.random() * moods.length)];
      }
    }

    setYearData(objReturned);
  };
  return (
    <div>
      <Button onClick={() => resetCalendar(year)}>Reset</Button>
      <Button onClick={generateRandomData}>Random</Button>
    </div>
  );
};

Operations.propTypes = {};

export default Operations;
