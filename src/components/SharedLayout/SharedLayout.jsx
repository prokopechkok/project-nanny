import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import css from './SharedLayout.module.css';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
