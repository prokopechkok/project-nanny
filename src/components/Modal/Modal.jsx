import ReactModal from 'react-modal';
import { Icon } from '../Icon/Icon';
import css from './Modal.module.css';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(11, 11, 11, 0.6)',
    zIndex: 300,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '64px',
    borderRadius: '30px',
    border: 'none',
    width: 'fit-content',
    maxWidth: '90%',
    height: 'fit-content',
    maxHeight: '90vh',
    overflowY: 'auto',
    backgroundColor: ' #fbfbfb',
    position: 'relative',
  },
};
ReactModal.setAppElement('#root');

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      autoFocus={true}
      className={css.modalContent}
    >
      <div>
        <button onClick={onClose} className={css.closeBtn}>
          <Icon id="close" className={css.closeIcon} />
        </button>
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
