import { useSelector } from 'react-redux';
import { Icon } from '../Icon/Icon';
import css from './BurgerMenu.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const BurgerMenu = ({ onBurgerClick }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const { name } = useSelector(selectUser);

  return (
    <div className={css.burgerMenu}>
      <button className={css.closeBtn} onClick={onBurgerClick}>
        <Icon id="close" className={css.closeIcon} />
      </button>
      {/* {isLoggedIn && (
        <div className={css.user}>
          <Icon id="user" className={css.userIcon} />

          <p className={css.userName}>{name}</p>
        </div>
      )} */}
      <nav className={css.mobileNav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/nannies">Nannies</NavLink>
        {isLoggedIn && <NavLink to="/favorites">Favorites</NavLink>}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </div>
  );
};

export default BurgerMenu;
