import { Icon } from '../Icon/Icon';
import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div>
      <div>
        <Icon id="menu" size={25} className={css.userIcon} />
        <p>Name</p>
      </div>
      <button>Log Out</button>
    </div>
  );
};

export default UserMenu;
