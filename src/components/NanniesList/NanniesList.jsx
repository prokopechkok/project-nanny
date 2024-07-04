import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNannies } from '../../redux/nannies/operations';
import {
  selectLastKey,
  selectMessage,
  selectNannies,
} from '../../redux/nannies/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import NannyCard from '../NannyCard/NannyCard';
import { sortNannies } from '../../utils/helpers';
import css from './NanniesList.module.css';

const NanniesList = () => {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const filter = useSelector(selectFilter);
  const lastKey = useSelector(selectLastKey);
  const message = useSelector(selectMessage);

  useEffect(() => {
    dispatch(getNannies({ limit: 3 }));
  }, [dispatch]);
  console.log(nannies);
  const loadMore = () => {
    dispatch(getNannies({ limit: 3, lastKey }));
  };

  const sortedNannies = sortNannies(nannies, filter);
  return (
    <div className={css.container}>
      {sortedNannies.length > 0 ? (
        <div className={css.listWrapper}>
          <ul className={css.cardsList}>
            {sortedNannies.map((nanny) => (
              <li key={nanny.id}>
                <NannyCard nanny={nanny} />
              </li>
            ))}
          </ul>
          {message || sortedNannies === 0 ? (
            <p>{message}</p>
          ) : (
            <button
              type="button"
              onClick={loadMore}
              className={css.loadMoreBtn}
            >
              Load more
            </button>
          )}
        </div>
      ) : (
        <p className={css.error}>No nannies to show</p>
      )}
    </div>
  );
};

export default NanniesList;
