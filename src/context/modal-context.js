import { createContext, useState } from 'react';

const ModalContext = createContext({
  modalStatus: 'closed',
  toggleModalStatus: () => {},
});

export const ModalContextProvider = props => {
  const [modalStatus, setModalStatus] = useState('closed');

  const toggleModalStatus = () => {
    if (modalStatus === 'open') {
      setModalStatus('closed');
    }

    if (modalStatus === 'closed') {
      setModalStatus('open');
    }
  };

  return (
    <ModalContext.Provider value={{ modalStatus, toggleModalStatus }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
