import { Icon } from '../Icon/Icon';

const Review = ({ review }) => {
  return (
    <div>
      <div>
        <div>
          <p>{review.reviewer}</p>
        </div>
        <div>
          <p>{review.reviewer}</p>
          <div>
            <Icon id="star" />
            <p>{review.rating}</p>
          </div>
        </div>
      </div>
      <p>{review.comment}</p>
    </div>
  );
};

export default Review;
