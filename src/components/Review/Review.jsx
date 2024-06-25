import { Icon } from '../Icon/Icon';
import css from './Review.module.css';

const Review = ({ review }) => {
  return (
    <div className={css.review}>
      <div className={css.info}>
        <div className={css.circle}>
          <p>{review.reviewer.charAt(0)}</p>
        </div>
        <div className={css.nameWrapper}>
          <p>{review.reviewer}</p>
          <div className={css.rating}>
            <Icon id="star" className={css.starIcon} />
            <p>{review.rating.toFixed(1)}</p>
          </div>
        </div>
      </div>
      <p className={css.text}>{review.comment}</p>
    </div>
  );
};

export default Review;
