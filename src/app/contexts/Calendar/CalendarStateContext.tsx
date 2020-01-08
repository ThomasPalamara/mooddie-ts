import React, { useState, useEffect, useContext } from 'react';
import _ from 'lodash';
import { db } from '../Firebase';
import { useAuthContext } from '../Firebase/AuthUserContext';
import { Date, Mood } from '../../utilities/types';

interface Calendar {
  [key: number]: {
    [key: number]: {
      [key: number]: Mood;
    };
  };
}

interface ContextProps {
  state: Calendar;
  setMood: (mood: string, date: Date) => Promise<boolean>;
  setYearData: (data: Calendar) => void;
}

const CalendarStateContext = React.createContext<ContextProps | null>(null);

export const useCalendar = () => {
  const context = useContext(CalendarStateContext);
  if (context === null) {
    throw new Error('useCalendar must be used within a CalendarStateProvider');
  }
  return context;
};

const CalendarStateProvider: React.FunctionComponent = ({ children }) => {
  const authUser = useAuthContext();

  const [state, setState] = useState({});

  useEffect(() => {
    if (authUser !== null) {
      db.listenToCalendarStateByUserId(authUser.uid, data => {
        setState(data);
      });
    }
  }, [authUser]);

  const setMood: ContextProps['setMood'] = (mood, date) => {
    return new Promise((resolve, reject) => {
      const { year, month, day } = date;
      const data = _.setWith(state, `${year}.${month}.${day}`, mood, Object);
      if (authUser)
        db.setMood(`${authUser?.uid}`, data)
          .then(() => resolve(true))
          .catch(err => reject(err));
    });
  };

  const setYearData = (data: Calendar) => {
    if (authUser) db.setMood(authUser?.uid, data);
  };

  return (
    <CalendarStateContext.Provider value={{ state, setMood, setYearData }}>
      {children}
    </CalendarStateContext.Provider>
  );
};

export { CalendarStateContext, CalendarStateProvider };
