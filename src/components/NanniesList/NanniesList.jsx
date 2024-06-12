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
    <>
      {sortedNannies.length > 0 ? (
        <div>
          <ul>
            {sortedNannies.map((nanny) => (
              <li key={nanny.id}>
                <NannyCard nanny={nanny} />
              </li>
            ))}
          </ul>
          {message || sortedNannies === 0 ? (
            <p>{message}</p>
          ) : (
            <button type="button" onClick={loadMore}>
              Load more
            </button>
          )}
        </div>
      ) : (
        <p>No nannies to show</p>
      )}
    </>
  );
};

export default NanniesList;
