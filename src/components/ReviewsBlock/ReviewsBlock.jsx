import { useState } from 'react';
import Review from '../Review/Review';
import Modal from '../Modal/Modal';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const ReviewsBlock = ({ reviews, avatar, name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <ul>
        {reviews.map((review) => {
          <li>
            <Review review={review} />
          </li>;
        })}
      </ul>
      <button type="button" onClick={() => setIsModalOpen(true)}>
        Make an appointment
      </button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <AppointmentForm name={name} avatar={avatar} />
        </Modal>
      )}
    </div>
  );
};

export default ReviewsBlock;
