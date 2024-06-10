import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
