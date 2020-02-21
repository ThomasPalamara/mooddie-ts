import React, { useMemo } from 'react';
import _ from 'lodash';
import { styled } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import Day from './Day';
import { useCalendar } from '../../contexts/Calendar/CalendarStateContext';
import getDaysInMonth from '../../utilities/getDaysInMonth';
import { Date } from '../../types';
import { useCalendarStyles } from './styles';

const months = _.range(0, 12);
// const months = _.range(1, 3); // ! for tests

interface Props {
  year: number;
}

const DayWithContext: React.FC<{ date: Date }> = ({ date }) => {
  const { year, month, day } = date;
  const { state: calendarState } = useCalendar();
  const dayState = _.get(calendarState, [year, month, day], undefined);
  return useMemo(() => {
    return <Day date={date} dayState={dayState} />;
  }, [dayState, date]);
};
// ! <---- Important part of the component. Without useMemo, the usage of useContext would rerender the whole tree of 365 <Day/> which is expensive

// ! ---->

const Calendar: React.FunctionComponent<Props> = ({ year }) => {
  const { t } = useTranslation('calendar');

  const classes = useCalendarStyles();

  return (
    <table className={classes.table}>
      {months.map(month => (
        <tr className={classes.tr} key={month}>
          <td className={classes.td} key={month}>
            <span>{t('months', { returnObjects: true })[month]}</span>
          </td>

          {_.range(1, getDaysInMonth(month, year) + 1).map(day => {
            return (
              <td className={classes.td} key={month + day}>
                <DayWithContext date={{ year, month, day }} key={month + day} />
              </td>
            );
          })}
        </tr>
      ))}
    </table>
  );
};

export default Calendar;
