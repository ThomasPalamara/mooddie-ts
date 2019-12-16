import React, { useContext } from 'react';

export const AuthUserContext = React.createContext(null);

export const useAuthContext = () => {
  return useContext(AuthUserContext);
};
