import { Link, NavLink, useLocation } from 'react-router-dom';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { Icon } from '../Icon/Icon';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

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
  // const isActive = (pathname) => {
  //   return location.pathname === pathname ? css.active : '';
  // };
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
          <nav className={css.navigation}>
            <ul className={css.navList}>
              <li className={css.navLink}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className={css.navLink}>
                <NavLink to="/nannies">Nannies</NavLink>
              </li>
              {isLoggedIn && (
                <li>
                  <NavLink to="/favorites">Favorites</NavLink>
                </li>
              )}
            </ul>

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </nav>
        }
      </div>
    </header>
  );
};
