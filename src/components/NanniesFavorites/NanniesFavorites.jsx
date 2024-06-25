import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import { useEffect, useState } from 'react';
import { sortNannies } from '../../utils/helpers';
import NannyCard from '../NannyCard/NannyCard';
import css from './NanniesFavorites.module.css';
const NanniesFavorites = () => {
  const favorites = useSelector(selectFavorites);
  const filter = useSelector(selectFilter);

  const [currentPage, setCurrentPage] = useState(0);
  const [nanniesToShow, setNanniesToShow] = useState([]);
  const perPage = 3;

  useEffect(() => {
    const totalPages = currentPage + 1;
    const nannies = [];
    for (let page = 0; page < totalPages; page++) {
      nannies.push(...loadNannies(page, favorites));
    }
    setNanniesToShow(nannies);
  }, [favorites, currentPage]);

  const loadNannies = (page, array) => {
    const start = page * perPage;
    const end = start + perPage;
    return array.slice(start, end);
  };

  const loadMore = () => {
    setNanniesToShow((prevNannies) => [
      ...prevNannies,
      ...loadNannies(currentPage + 1, favorites),
    ]);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const sortedNannies = sortNannies(nanniesToShow, filter);

  return (
    <div className={css.listWrapper}>
      {sortedNannies.length > 0 ? (
        <ul className={css.cardsList}>
          {sortedNannies.map((nanny) => (
            <li key={nanny.id}>
              <NannyCard nanny={nanny} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.error}>No nannies to show</p>
      )}

      {
        currentPage !== 0 && currentPage * perPage < favorites.length && (
          <button type="button" onClick={loadMore} className={css.loadMoreBtn}>
            Load more
          </button>
        )
        // : (
        //   <p className={css.error}>No more favorite nannies to show</p>
        // )
      }
    </div>
  );
};

export default NanniesFavorites;
