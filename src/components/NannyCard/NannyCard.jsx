import { useEffect, useState } from 'react';
import css from './NannyCard.module.css';
import ReviewsBlock from '../ReviewsBlock/ReviewsBlock';
import { Icon } from '../Icon/Icon';
import Characteristics from '../Characteristics/Characteristics';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { addFavorites, removeFavorites } from '../../redux/favorites/slice';
import { toast } from 'react-toastify';
import { selectFavorites } from '../../redux/favorites/selectors';
import Modal from '../Modal/Modal';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const NannyCard = ({ nanny }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favorites = useSelector(selectFavorites);

  const [isFavorite, setIsFavorite] = useState(false);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heartIcon = isFavorite ? 'heart-blue' : 'heart';
  const heartCss = isFavorite ? 'css.heartBlue' : 'css.heart';

  const {
    id,
    name,
    avatar_url,
    about,
    location,
    price_per_hour,
    rating,
    reviews,
  } = nanny;

  useEffect(() => {
    if (isLoggedIn) {
      if (favorites.some((favorite) => favorite.id === id)) {
        setIsFavorite(true);
      }
    }
  }, [favorites, id, isLoggedIn]);

  const toggleReadMore = () => {
    setIsReadMoreOpen(!isReadMoreOpen);
  };
  const handleFavoriteSelected = () => {
    if (isLoggedIn) {
      setIsFavorite(!isFavorite);
      if (!isFavorite) {
        dispatch(addFavorites(nanny));
      } else {
        dispatch(removeFavorites(id));
      }
    } else {
      toast.error('Something went wrong. Please try to register first');
    }
  };
  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img src={avatar_url} alt={name} className={css.avatar} />
        <div className={css.online}></div>
      </div>
      <div className={css.info}>
        <div className={css.infoWrapper}>
          <div className={css.header}>
            <div className={css.nameWrapper}>
              <p>Nanny</p>
              <h2 className={css.name}>{name}</h2>
            </div>
            <div className={css.headerInfo}>
              <div className={css.locationWrapper}>
                <Icon id="map-pin" className={css.locationIcon} />
                <p>{location}</p>
              </div>
              <div className={css.separator} />
              <div className={css.ratingWrapper}>
                <Icon id="star" className={css.starIcon} />
                {/* <img
                  src="../../assets/images/star.png"
                  alt="star"
                  className={css.starIcon}
                /> */}
                <p>Rating: {rating}</p>
              </div>
              <div className={css.separator} />
              <p>
                Price / 1 hour:{' '}
                <span className={css.price}>{price_per_hour}$</span>
              </p>
              <button
                type="button"
                onClick={handleFavoriteSelected}
                className={css.heartBtn}
              >
                <Icon id={heartIcon} className={heartCss} />
              </button>
            </div>
          </div>
          <Characteristics nanny={nanny} />
          <p className={css.description}>{about}</p>
        </div>
        {!isReadMoreOpen && (
          <button
            type="button"
            onClick={toggleReadMore}
            className={css.readMoreBtn}
          >
            Read more
          </button>
        )}
        {isReadMoreOpen && <ReviewsBlock reviews={reviews} />}

        {isReadMoreOpen && (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className={css.appointmentBtn}
          >
            Make an appointment
          </button>
        )}
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <AppointmentForm name={name} avatar={avatar_url} />
        </Modal>
      )}
    </div>
  );
};

export default NannyCard;
