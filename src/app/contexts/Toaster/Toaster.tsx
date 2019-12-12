import React, { useState, useContext } from 'react';
import { Toast } from '../../library';

interface Toast {
  id: number;
  message: string;
  type: 'error' | 'success' | 'warning';
}

type ContextProps = {
  addToast: (type: Toast['type'], message: Toast['message']) => void;
};

const initialValue = {
  addToast: (): void => {
    //Initial function
  },
};

export const ToasterContext = React.createContext<ContextProps>(initialValue);

export const useToaster = (): ContextProps => {
  return useContext(ToasterContext);
};

let toastCount = 0;

export const ToasterProvider: React.FC = ({ children }) => {
  const [toaster, setToaster] = useState<Array<Toast>>([]);

  const addToast = (type: Toast['type'], message: Toast['message']) => {
    toastCount++;
    setToaster([...toaster, { id: toastCount, message, type }]);
  };
  return (
    <ToasterContext.Provider value={{ addToast }}>
      {children}
      {toaster.map(({ id, message, type }) => (
        <Toast key={id} message={message} type={type} />
      ))}
    </ToasterContext.Provider>
  );
};

export default ToasterContext;
