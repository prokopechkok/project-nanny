import { Link } from 'react-router-dom';
import css from './Home.module.css';
import { useState } from 'react';
import { Icon } from '../../components/Icon/Icon';
import ExperiencedTab from '../../components/ExperiencedTab/ExperiencedTab';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={css.container}>
      <div className={css.textBlock}>
        <h1 className={css.title}>Make Life Easier for the Family:</h1>
        <p className={css.text}>Find Babysitters Online for All Occasions</p>
        <Link
          to="/nannies"
          className={css.linkBtn}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
        >
          Get started
          <Icon
            id={isHovered ? 'arrow-right' : 'arrow-up'}
            className={css.arrowIcon}
          />
        </Link>
      </div>

      <ExperiencedTab />
    </div>
  );
};

export default Home;
