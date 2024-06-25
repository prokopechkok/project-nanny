import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/nannies/selectors';
import Loader from '../../components/Loader/Loader';
import Filter from '../../components/Filter/Filter';
import NanniesFavorites from '../../components/NanniesFavorites/NanniesFavorites';
import css from './Favorites.module.css';

const Favorites = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.container}>
      {isLoading && <Loader />}

      <Filter />
      <NanniesFavorites />
    </div>
  );
};

export default Favorites;
