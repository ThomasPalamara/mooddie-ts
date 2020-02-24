import React, { useMemo } from 'react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import * as Styled from '../../styles/components/Calendar.style';
import Day from './Day';
import { useCalendar } from '../../contexts/Calendar/CalendarStateContext';
import getDaysInMonth from '../../utilities/getDaysInMonth';

const months = _.range(0, 12);
// const months = _.range(1, 3); // ! for tests

interface Props {
  year: number;
}

// ! <---- Important part of the component. Without useMemo, the usage of useContext would rerender the whole tree of 365 <Day/> which is expensive

const DayWithContext: React.FC<{ date: T.Date }> = ({ date }) => {
  const { year, month, day } = date;
  const { state: calendarState } = useCalendar();
  const dayState = _.get(calendarState, [year, month, day], undefined);
  return useMemo(() => {
    return <Day date={date} dayState={dayState} />;
  }, [dayState, date]);
};

// ! ---->

const Calendar: React.FunctionComponent<Props> = ({ year }) => {
  const { t } = useTranslation('calendar');

  return (
    <Styled.Table>
      {months.map(month => (
        <Styled.TRow key={month}>
          <Styled.TData key={month}>
            <span>{t('months', { returnObjects: true })[month]}</span>
          </Styled.TData>

          {_.range(1, getDaysInMonth(month, year) + 1).map(day => {
            return (
              <Styled.TData key={month + day}>
                <DayWithContext date={{ year, month, day }} key={month + day} />
              </Styled.TData>
            );
          })}
        </Styled.TRow>
      ))}
    </Styled.Table>
  );
};

export default Calendar;
