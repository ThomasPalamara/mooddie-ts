import React, { useState, useContext } from 'react';
import { Alert as Toast } from 'dale';

interface Toast {
  id: number;
  message: string;
  type: 'error' | 'success';
}

type ContextProps = {
  addToast: (type: Toast['type'], message: Toast['message']) => void;
};

export const ToasterContext = React.createContext<ContextProps | null>(null);

export const useToaster = () => {
  const context = useContext(ToasterContext);
  if (context === null) {
    throw new Error('useToaster must be used within a ToasterProvider');
  }
  return context;
};

let toastCount = 0;

export const ToasterProvider: React.FC = ({ children }) => {
  const [toaster, setToaster] = useState<Array<Toast>>([]);

  const addToast = (type: Toast['type'], message: Toast['message']) => {
    toastCount += 1;
    setToaster([...toaster, { id: toastCount, message, type }]);
  };
  const removeToast = (id: string | number) => {
    setToaster(prev => prev.filter(e => e.id !== id));
  };
  return (
    <ToasterContext.Provider value={{ addToast }}>
      {children}
      <div className="w-1/2 abs-center top-0">
        {toaster.map(({ id, message, type }) => (
          <Toast key={id} id={id} handleClose={removeToast} message={message} type={type} />
        ))}
      </div>
    </ToasterContext.Provider>
  );
};

export default ToasterContext;
