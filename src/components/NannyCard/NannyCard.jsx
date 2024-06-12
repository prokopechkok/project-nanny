import css from './NannyCard.module.css';
const NannyCard = ({ nanny }) => {
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
      <button type="button">Read more</button>
    </div>
  );
};

export default NannyCard;
