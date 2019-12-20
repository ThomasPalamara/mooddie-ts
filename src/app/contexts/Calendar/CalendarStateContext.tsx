import React, { useState, useEffect, useContext } from 'react';
import _ from 'lodash';
import { db } from '../Firebase';
import { useAuthContext } from '../Firebase/AuthUserContext';
import { Date } from '../../utilities/types';

interface Calendar {
  [key: number]: {
    [key: number]: {
      [key: number]: string;
    };
  };
}

interface ContextProps {
  state: Calendar;
  setMood: (mood: string, date: Date) => void;
}

const initialState = {} as Calendar;

const CalendarStateContext = React.createContext<ContextProps>({
  state: initialState,
  setMood: (mood, date) => {
    console.log('here');
    return { mood, date };
  },
});

export const useCalendar = () => {
  return useContext(CalendarStateContext);
};

const CalendarStateProvider: React.FunctionComponent = ({ children }) => {
  const authUser = useAuthContext();

  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (authUser !== null) {
      db.listenToCalendarStateByUserId(authUser.uid, data => {
        setState(data);
      });
    }
  }, [authUser]);

  const setMood: ContextProps['setMood'] = (mood, date) => {
    console.log('mood :', mood);
    const [year, month, day] = date;
    const data = _.setWith(state, `${year}.${month}.${day}`, mood, Object);
    if (authUser) db.setMood(authUser?.uid, data);
  };

  return (
    <CalendarStateContext.Provider value={{ state, setMood }}>
      {children}
    </CalendarStateContext.Provider>
  );
};

export { CalendarStateContext, CalendarStateProvider };
