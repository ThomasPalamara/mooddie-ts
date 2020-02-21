import React, { useState, useContext } from 'react';
import MoodModal from '../../components/Mood/MoodModal';
import { Date } from '../../types';

interface ContextProps {
  showMoodModal: (show: boolean, date?: Date) => void;
}

export const ModalContext = React.createContext<ContextProps | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider: React.FC = ({ children }) => {
  const [moodModal, setMoodModal] = useState<{ show: boolean; date: Date }>({
    show: false,
    date: { year: 2019, month: 1, day: 1 },
  });
  const showMoodModal: ContextProps['showMoodModal'] = (show, selectedDate) => {
    setMoodModal(prev => {
      // prettier-ignore
      return { ...prev, show, ...(selectedDate && { date: selectedDate }) };
    });
  };

  return (
    <ModalContext.Provider value={{ showMoodModal }}>
      {children}
      <MoodModal open={moodModal.show} onClose={() => showMoodModal(false)} date={moodModal.date} />
    </ModalContext.Provider>
  );
};

export default ModalContext;
