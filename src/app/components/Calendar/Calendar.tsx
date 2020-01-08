import React, { useMemo } from 'react';
import _ from 'lodash';
import styled from '@emotion/styled';
import Day from './Day';
import { useCalendar } from '../../contexts/Calendar/CalendarStateContext';
import getMonthFromNum from '../../utilities/getMonthFromNum';
import getDaysInMonth from '../../utilities/getDaysInMonth';
import { Date } from '../../utilities/types';
import { theme, mq } from '../../styles';

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
  const { fz } = theme;

  const Table = styled.table`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    /* ${mq({ fontSize: [theme.fz.sm, theme.fz.md] })} */
    font-size: ${theme.fz.sm};
    /* @media (min-width: ${theme.bps.md}px) {
      font-size: ${theme.fz.md};
    }
    @media (min-width: ${theme.bps.lg}px) {
      font-size: ${theme.fz.lg};
    } */
    ${mq({ fontSize: [, , fz.sm, fz.md, fz.lg] })}
    width: 100%;
    justify-content: center;
  `;
  const TRow = styled.tr`
    width: 9ch;
  `;
  const TData = styled.td`
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
      {months.map(month => (
        <TRow key={month}>
          <TData key={month}>
            <span>{getMonthFromNum(month)}</span>
          </TData>

          {_.range(1, getDaysInMonth(month, year) + 1).map(day => {
            return (
              <TData key={month + day}>
                <DayWithContext date={{ year, month, day }} key={month + day} />
              </TData>
            );
          })}
        </TRow>
      ))}
    </Table>
  );
};

export default Calendar;
