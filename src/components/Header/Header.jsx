import { Link, NavLink } from 'react-router-dom';
// import { Icon } from '../Icon/Icon';
// import css from './Header.module.css';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Link>Nanny.Services</Link>
      {/* <button className={css.button}>
        <Icon id="menu" className={css.burgerIcon} size={25} />
      </button> */}

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/nannies">Nannies</NavLink>
        {isLoggedIn && <NavLink to="/favorites">Favorites</NavLink>}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};
