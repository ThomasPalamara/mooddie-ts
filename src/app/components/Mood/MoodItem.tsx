import React from 'react';

const MoodItem: React.FC<{ mood: string }> = ({ mood }) => {
  return <div className="py-2 px-4">{mood}</div>;
};

export default MoodItem;
