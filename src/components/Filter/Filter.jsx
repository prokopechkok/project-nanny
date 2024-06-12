import { useEffect, useRef, useState } from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { findNannies } from '../../redux/filter/slice';
import clsx from 'clsx';
import { Icon } from '../Icon/Icon';

const Filter = () => {
  const filterOptions = [
    'A to Z',
    'Z to A',
    'Less than 10$',
    'Greater than 10$',
    'Popular',
    'Not popular',
    'Show all',
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('A to Z');

  const filterRef = useRef(null);
  const dispatch = useDispatch();

  const handleFilter = (filter) => dispatch(findNannies(filter));

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedFilter = (option) => {
    setSelectedFilter(option);
    setIsOpen(false);
    handleFilter(option);
  };

  const handleClickOut = (e) => {
    if (filterRef.current && !filterRef.current.contains(e.target)) {
      handleDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOut);
    return () => {
      document.removeEventListener('mousedown', handleClickOut);
    };
  });

  return (
    <div>
      <p>Filters</p>
      <button className={css.dropdown} onClick={handleDropdown}>
        {selectedFilter}
        <Icon id="arrow-down" className={css.icon} />
      </button>
      {isOpen && (
        <ul ref={filterRef}>
          {filterOptions.map((option, index) => (
            <li
              key={index}
              className={clsx(
                css.option,
                `${selectedFilter === option ? css.active : ''}`
              )}
              onClick={() => handleSelectedFilter(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
