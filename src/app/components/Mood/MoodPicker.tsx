import React from 'react';
import moods from '../../constants/moods';
import { useCalendar } from '../../contexts/Calendar/CalendarStateContext';
import { Date } from '../../utilities/types';
import MoodItem from './MoodItem';

const MoodPicker: React.FC<{ date: Date }> = ({ date }) => {
  const { setMood } = useCalendar();

  const handleMoodSelection = (mood: string) => {
    setMood(mood, date);
  };

  return (
    <div>
      <h4>How are you feeling today ?</h4>
      <div className="flex">
        {moods.map(mood => (
          <button type="button" onClick={() => handleMoodSelection(mood)}>
            <MoodItem key={mood} mood={mood}>
              {mood}
            </MoodItem>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodPicker;
