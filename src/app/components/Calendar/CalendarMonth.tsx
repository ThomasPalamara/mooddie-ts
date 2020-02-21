import React, { useMemo } from 'react';
import _ from 'lodash';
import { styled } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { getMonth, getDate } from 'date-fns';
import Day from './Day';
import { useCalendar } from '../../contexts/Calendar/CalendarStateContext';
import getCalendarMonth from '../../utilities/getCalendarMonth';
import { Date } from '../../types';
// import theme, { colors } from '../../styles';

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
  // const { fz } = theme;
  const Table = styled('table')({
    width: '100%',
    justifyContent: 'center',
  });
  // font-size: ${theme.fz.sm};
  // ${mq({ fontSize: [, , fz.sm, fz.md, fz.lg] })}
  const TRow = styled('tr')({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  });
  const TData = styled('td')(({ theme }) => ({
    width: `${100 / 7}%`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2rem',
    marginTop: '-1px',
    marginLeft: '-1px',
    border: theme.palette.grey[600],
  }));

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
