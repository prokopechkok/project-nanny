import { Link, NavLink } from 'react-router-dom';
// import { Icon } from '../Icon/Icon';
// import css from './Header.module.css';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

export const Header = () => {
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
