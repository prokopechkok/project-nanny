import ReactModal from 'react-modal';
import { Icon } from '../Icon/Icon';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(11, 11, 11, 0.6);',
    zIndex: 100,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    borderRadius: '20px',
    maxWidth: '600px',
    minHeight: '489px',
    backgroundColor: ' #fbfbfb',
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
    >
      <div>
        <button onClick={onClose}>
          <Icon id="close" />
        </button>
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
