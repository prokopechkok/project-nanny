import { Icon } from '../Icon/Icon';
import css from './ExperiencedTab.module.css';
const ExperiencedTab = () => {
  return (
    <div className={css.container}>
      <div className={css.square}>
        <Icon id={'check'} className={css.checkIcon} />
      </div>
      <div className={css.textWrapper}>
        <p className={css.text}>Experienced nannies</p>
        <p className={css.number}>15,000</p>
      </div>
    </div>
  );
};

export default ExperiencedTab;
