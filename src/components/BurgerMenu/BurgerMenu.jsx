import { useSelector } from 'react-redux';
import { Icon } from '../Icon/Icon';
import css from './BurgerMenu.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const BurgerMenu = ({ onBurgerClick }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <div className={css.burgerMenu}>
        <button className={css.closeBtn} onClick={onBurgerClick}>
          <Icon id="close" className={css.closeIcon} />
        </button>

        <nav className={css.mobileNav}>
          <NavLink to="/" onClick={onBurgerClick}>
            Home
          </NavLink>
          <NavLink to="/nannies" onClick={onBurgerClick}>
            Nannies
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/favorites" onClick={onBurgerClick}>
              Favorites
            </NavLink>
          )}
        </nav>
        {isLoggedIn ? (
          <UserMenu onClick={onBurgerClick} />
        ) : (
          <AuthNav onClick={onBurgerClick} />
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
