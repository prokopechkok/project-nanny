import { Link } from 'react-router-dom';
import css from './Home.module.css';
import { useState } from 'react';
import { Icon } from '../../components/Icon/Icon';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={css.container}>
      <div>
        <h1>Make Life Easier for the Family:</h1>
        <p>Find Babysitters Online for All Occasions</p>
        <Link
          to="/nannies"
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
      <div>
        <div>
          <Icon id={'check'} className={css.checkIcon} />
        </div>
        <div>
          <p>Experienced nannies</p>
          <p>15,000</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
