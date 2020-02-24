import React, { useMemo } from 'react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { getMonth, getDate } from 'date-fns';
import * as Styled from '../../styles/components/Calendar.style';
import Day from './Day';
import { useCalendar } from '../../contexts/Calendar/CalendarStateContext';
import getCalendarMonth from '../../utilities/getCalendarMonth';

interface Props {
  year: number;
  month: number;
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

const Calendar: React.FunctionComponent<Props> = ({ year, month }) => {
  const { t } = useTranslation('calendar');

  const calendarMonth = getCalendarMonth(year, month - 1);
  const daysName: [] = t('days', { returnObjects: true });

  return (
    <Styled.Table>
      <Styled.TRow>
        {daysName.map(day => (
          <Styled.TData>{day}</Styled.TData>
        ))}
      </Styled.TRow>
      {calendarMonth.map(week => (
        <Styled.TRow>
          {week.map(date => (
            <Styled.TData>
              <DayWithContext
                date={{ year, month: getMonth(date), day: getDate(date) }}
                key={month + getDate(date)}
              />
            </Styled.TData>
          ))}
        </Styled.TRow>
      ))}
    </Styled.Table>
  );
};

export default Calendar;
