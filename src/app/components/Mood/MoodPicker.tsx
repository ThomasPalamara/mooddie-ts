import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'react-feather';
import { useTranslation } from 'react-i18next';
import * as Styled from '../../styles/components/Mood.style';
import moods from '../../constants/moods';
import { useCalendar } from '../../contexts/Calendar/CalendarStateContext';

import MoodItem from './MoodItem';
import { Spinner } from '../../library';

const MoodPicker: React.FC<{ date: T.Date }> = ({ date }) => {
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

  return (
    <div>
      <div css={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4>{t('moodPicker.title')}</h4>
        <Styled.Status>
          {setMoodHasBeenCalledOnce &&
            (loading ? (
              <Spinner color="success" />
            ) : (
              <span>
                <CheckCircle />
                &nbsp;
                {t('dataSaved')}
              </span>
            ))}
        </Styled.Status>
      </div>
      <Styled.BtnWrapper>
        {moods.map(mood => (
          <button type="button" onClick={() => handleMoodSelection(mood)}>
            <MoodItem key={mood} mood={mood}>
              {mood}
            </MoodItem>
          </button>
        ))}
      </Styled.BtnWrapper>
    </div>
  );
};

export default MoodPicker;
