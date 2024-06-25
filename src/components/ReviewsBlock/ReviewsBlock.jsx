import css from './ReviewsBlock.module.css';
import Review from '../Review/Review';

const ReviewsBlock = ({ reviews }) => {
  return (
    <ul className={css.list}>
      {reviews.map((review) => (
        <li key={review.reviewer}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewsBlock;
