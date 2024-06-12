import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/auth/selectors';
import css from './Nannies.module.css';
import Loader from '../../components/Loader/Loader';
import Filter from '../../components/Filter/Filter';
import NanniesList from '../../components/NanniesList/NanniesList';
import Error from '../../components/Error/Error';

const Nannies = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {isError && <Error />}
      <div>
        <Filter />
        <NanniesList />
      </div>
    </div>
  );
};

export default Nannies;
