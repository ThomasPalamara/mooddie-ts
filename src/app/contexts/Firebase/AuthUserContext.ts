import React, { useContext } from 'react';
import firebase from 'firebase/app';

export const AuthUserContext = React.createContext(null);

export const useAuthContext = (): firebase.User | null => {
  return useContext(AuthUserContext);
};
