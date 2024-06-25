import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import { Icon } from '../Icon/Icon';
const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <div className={css.nameBlock}>
        <div className={css.iconBox}>
          <Icon id="user" className={css.userIcon} />
        </div>
        <p className={css.name}>
          {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
        </p>
      </div>
      <button
        type="button"
        onClick={() => dispatch(logout())}
        className={css.logoutBtn}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
