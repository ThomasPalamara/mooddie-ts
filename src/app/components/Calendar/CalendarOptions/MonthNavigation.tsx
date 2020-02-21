import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import styled from '@emotion/styled';
import { getYear } from 'date-fns';
import { useTranslation } from 'react-i18next';

import { handleSelectMonthNav } from '../../../types';

interface Props {
  handleSelectMonth: handleSelectMonthNav;
  month: number;
  year: number;
}
const MonthNavigation: React.FC<Props> = ({
  handleSelectMonth,
  month = 1,
  year = getYear(new Date()),
}) => {
  const { t } = useTranslation('calendar');
  const Wrapper = styled.div`
    display: flex;
  `;
  const handleChange = (operation: 'next' | 'prev') => {
    let newYear = year;
    let newMonth = operation === 'prev' ? month - 1 : month + 1;

    if (newMonth === -1) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth === 12) {
      newMonth = 0;
      newYear += 1;
    }
    handleSelectMonth(newYear, newMonth);
  };

  return (
    <Wrapper>
      <ChevronLeft onClick={() => handleChange('prev')} />
      {t('months', { returnObjects: true })[month]}
      <ChevronRight onClick={() => handleChange('next')} />
    </Wrapper>
  );
};

export default MonthNavigation;
