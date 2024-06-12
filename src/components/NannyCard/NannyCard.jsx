import { useState } from 'react';
import css from './NannyCard.module.css';
import ReviewsBlock from '../ReviewsBlock/ReviewsBlock';
const NannyCard = ({ nanny }) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  // const {
  //   name,
  //   avatar_url,
  //   education,
  //   experience,
  //   kids_age,
  //   characters,
  //   about,
  //   birthday,
  //   location,
  //   price_per_hour,
  //   rating,
  //   reviews,
  //   onRemoveFromFavorites,
  // } = nanny;
  // const characteristics = [
  //   birthday,
  //   experience,
  //   kids_age,
  //   characters,
  //   education,
  // ];
  return (
    <div>
      <div className={css.imageWrapper}>
        <img src="" alt="" />
        <div></div>
      </div>

      <div className={css.infoWrapper}>
        <div className={css.header}></div>
        <ul></ul>
        <p className={css.description}>{nanny.about}</p>
      </div>
      {isReadMoreOpen ? (
        <ReviewsBlock
          reviews={nanny.reviews}
          avatar={nanny.avatar_url}
          name={nanny.name}
        />
      ) : (
        <button type="button" onClick={() => setIsReadMoreOpen(true)}>
          Read more
        </button>
      )}
    </div>
  );
};

export default NannyCard;
