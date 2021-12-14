import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../hooks';
import { setSearch } from '../../store/reducers/photosReducer';
import s from './Search.module.css';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const { search } = useSelector(s => s.photos);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchValue !== search) {
        dispatch(setSearch(searchValue.trim()));
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [search, searchValue, dispatch]);

  return (
    <div className={s.search}>
      <input
        type='text'
        placeholder='Search photo...'
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </div>
  );
};
