import React, { useContext, useMemo, useState } from 'react';
import classNames from 'classnames';

import _ from 'lodash';
import Day from './Day';
import { useCalendar } from '../../contexts/Calendar/CalendarStateContext';
import getMonthFromNum from '../../utilities/getMonthFromNum';
import getDaysInMonth from '../../utilities/getDaysInMonth';
import { Date } from '../../utilities/interfaces';

const months = _.range(1, 13);
// const months = _.range(1, 3); // ! for tests

interface Props {
  year: number;
}

const DayWithContext: React.FunctionComponent<{ date: Date }> = ({ date }) => {
  const { state: calendarState } = useCalendar();
  const dayState = _.get(calendarState, date, undefined);
  return useMemo(() => {
    return <Day date={date} dayState={dayState} />;
  }, [dayState, date]);
};
// ! <---- Important part of the component. Without useMemo, the usage of useContext would rerender the whole tree of 365 <Day/> which is expensive

// ! ---->

const Calendar: React.FunctionComponent<Props> = ({ year }) => {
  const classTable = classNames('border-collapse w-full');
  const classTr = classNames('block float-left w-1/12');
  const classTd = 'block border h-8 -mt-px -ml-px';
  return (
    <table className={classTable}>
      <tbody>
        {months.map(month => (
          <tr className={classTr} key={month}>
            <td className={classTd} key={month}>
              {getMonthFromNum(month)}
            </td>

            {_.range(1, getDaysInMonth(month, year) + 1).map(day => {
              return (
                <td className={classTd} key={month + day}>
                  <DayWithContext date={[year, month, day]} key={month + day} />
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
