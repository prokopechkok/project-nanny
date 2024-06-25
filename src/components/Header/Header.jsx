import { Link, NavLink, useLocation } from 'react-router-dom';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { Icon } from '../Icon/Icon';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import clsx from 'clsx';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const selectHeader = () => {
    return location.pathname === '/' ? css.home : css.nannies;
  };
  const onBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const isActive = (pathname) => {
    return location.pathname === pathname ? css.active : '';
  };

  return (
    <header className={selectHeader()}>
      <div className={css.headerLine}>
        <Link className={css.logo} to="/">
          Nanny.Services
        </Link>
        <button className={css.burgerBtn} onClick={onBurgerClick}>
          <Icon id="menu" className={css.burgerIcon} />
        </button>
        {isMenuOpen && <BurgerMenu onBurgerClick={onBurgerClick} />}
        {
          <div className={css.navigation}>
            <nav className={css.navList}>
              <NavLink className={clsx(css.navLink, isActive('/'))} to="/">
                Home
              </NavLink>

              <NavLink
                className={clsx(css.navLink, isActive('/nannies'))}
                to="/nannies"
              >
                Nannies
              </NavLink>

              {isLoggedIn && (
                <NavLink
                  className={clsx(css.navLink, isActive('/favorites'))}
                  to="/favorites"
                >
                  Favorites
                </NavLink>
              )}
            </nav>

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </div>
        }
      </div>
    </header>
  );
};
