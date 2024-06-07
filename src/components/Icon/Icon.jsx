import sprite from '../../assets/icons/sprite.svg';

export const Icon = ({ id, className, size }) => {
  return (
    <svg className={className} height={size} width={size}>
      <use href={sprite + '#icon-' + id}></use>
    </svg>
  );
};
