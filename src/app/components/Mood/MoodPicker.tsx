/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'react-feather';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import { CircularProgress } from '@material-ui/core';
import moods from '../../constants/moods';
import { useCalendar } from '../../contexts/Calendar/CalendarStateContext';
import { Date } from '../../types';
import MoodItem from './MoodItem';
// import theme from '../../styles';

const MoodPicker: React.FC<{ date: Date }> = ({ date }) => {
  const { setMood } = useCalendar();
  const [loading, setloading] = useState(false);
  const [setMoodHasBeenCalledOnce, setSetMoodHasBeenCalledOnce] = useState(false);
  const { t } = useTranslation('mood');

  useEffect(() => {
    setSetMoodHasBeenCalledOnce(false);
  }, [date]);

  const handleMoodSelection = (mood: string) => {
    setSetMoodHasBeenCalledOnce(true);
    setloading(true);
    setMood(mood, date).then(() => setloading(false));
  };

  // color: ${theme.color('success')};
  const SpanStatus = styled.div`
    span {
      display: flex;
    }
  `;
  const BtnWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
  const Header = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <div>
      <div css={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4>{t('moodPicker.title')}</h4>
        <SpanStatus>
          {setMoodHasBeenCalledOnce &&
            (loading ? (
              <CircularProgress />
            ) : (
              <span>
                <CheckCircle />
                &nbsp;
                {t('dataSaved')}
              </span>
            ))}
        </SpanStatus>
      </div>
      <BtnWrapper>
        {moods.map(mood => (
          <button type="button" onClick={() => handleMoodSelection(mood)}>
            <MoodItem key={mood} mood={mood}>
              {mood}
            </MoodItem>
          </button>
        ))}
      </BtnWrapper>
    </div>
  );
};

export default MoodPicker;
