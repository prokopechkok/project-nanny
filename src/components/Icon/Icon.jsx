import sprite from '../../assets/icons/sprite.svg';

export const Icon = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={sprite + '#icon-' + id}></use>
    </svg>
  );
};
