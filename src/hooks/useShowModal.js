import { useState } from 'react';

function useShowModal(option) {
  const [showModal, setShowModal] = useState(option);
  const togleModal = () => setShowModal(prevState => !prevState);

  return { togleModal, showModal };
}

export default useShowModal;
