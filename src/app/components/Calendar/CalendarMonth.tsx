import React, { useMemo } from 'react';
import _ from 'lodash';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { getMonth, getDate } from 'date-fns';
import Day from './Day';
import { useCalendar } from '../../contexts/Calendar/CalendarStateContext';
import getCalendarMonth from '../../utilities/getCalendarMonth';
import { Date } from '../../utilities/types';
import { theme, mq } from '../../styles';

interface Props {
  year: number;
  month: number;
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

const Calendar: React.FunctionComponent<Props> = ({ year, month }) => {
  const { t } = useTranslation('calendar');

  const calendarMonth = getCalendarMonth(year, month - 1);
  const daysName: [] = t('days', { returnObjects: true });

  // Style
  const { fz } = theme;
  const Table = styled.table`
    font-size: ${theme.fz.sm};
    ${mq({ fontSize: [, , fz.sm, fz.md, fz.lg] })}
    width: 100%;
    justify-content: center;
  `;
  const TRow = styled.tr`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  `;
  const TData = styled.td`
    width: ${100 / 7}%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.gray[200]};
    height: 2rem;
    margin-top: -1px;
    margin-left: -1px;
  `;

  return (
    <Table>
      <TRow>
        {daysName.map(day => (
          <TData>{day}</TData>
        ))}
      </TRow>
      {calendarMonth.map(week => (
        <TRow>
          {week.map(date => (
            <TData>
              <DayWithContext
                date={{ year, month: getMonth(date), day: getDate(date) }}
                key={month + getDate(date)}
              />
            </TData>
          ))}
        </TRow>
      ))}
    </Table>
  );
};

export default Calendar;
