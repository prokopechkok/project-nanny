import css from './Characteristics.module.css';
const Characteristics = ({ nanny }) => {
  const age = new Date().getFullYear() - new Date(nanny.birthday).getFullYear();
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <p>
          Age: <span className={css.age}>{age}</span>
        </p>
      </li>
      <li className={css.listItem}>
        <p>
          Experience: <span>{nanny.experience}</span>
        </p>
      </li>
      <li className={css.listItem}>
        <p>
          Kids age: <span>{nanny.kids_age}</span>
        </p>
      </li>
      <li className={css.listItem}>
        <p>
          Characters:{' '}
          <span>
            {nanny.characters
              .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
              .join(', ')}
          </span>
        </p>
      </li>
      <li className={css.listItem}>
        <p>
          Education: <span>{nanny.education}</span>
        </p>
      </li>
    </ul>
  );
};

export default Characteristics;
