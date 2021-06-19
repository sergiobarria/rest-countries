import { useContext } from 'react';

import ModalContext from '../context/modal-context';

export const useModal = () => {
  const ctx = useContext(ModalContext);

  return ctx;
};

// export default useModal;
