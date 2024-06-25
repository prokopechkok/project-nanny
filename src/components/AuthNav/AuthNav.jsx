import { useState } from 'react';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import css from './AuthNav.module.css';
import clsx from 'clsx';

const AuthNav = () => {
  const [isLogModal, setIsLogModal] = useState(false);
  const [isRegistModal, setIsRegistModal] = useState(false);

  return (
    <div>
      <ul className={css.authBtns}>
        <li>
          <button
            type="button"
            onClick={() => setIsLogModal(true)}
            className={clsx(css.button, css.loginBtn)}
          >
            Log In
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => setIsRegistModal(true)}
            className={clsx(css.button, css.regBtn)}
          >
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
