import { useState } from 'react';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const AuthNav = () => {
  const [isLogModal, setIsLogModal] = useState(false);
  const [isRegistModal, setIsRegistModal] = useState(false);

  return (
    <div>
      <ul>
        <li>
          <button type="button" onClick={() => setIsLogModal(true)}>
            Log In
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setIsRegistModal(true)}>
            Registration
          </button>
        </li>
      </ul>
      {isLogModal && (
        <Modal isOpen={isLogModal} onClose={() => setIsLogModal(false)}>
          <LoginForm />
        </Modal>
      )}
      {isRegistModal && (
        <Modal isOpen={isRegistModal} onClose={() => setIsRegistModal(false)}>
          <RegistrationForm />
        </Modal>
      )}
    </div>
  );
};

export default AuthNav;
