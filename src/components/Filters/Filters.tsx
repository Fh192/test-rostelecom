import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Arrow } from '../../assets/Arrow';
import { useSelector } from '../../hooks';
import { setPhotos } from '../../store/reducers/photosReducer';
import s from './Filters.module.css';

export const Filters: React.FC = () => {
  const dispatch = useDispatch();

  const { photos } = useSelector(s => s.photos);
  const [sortById, setSortById] = useState(false);

  useEffect(() => {
    const sortedPhotos = [...photos].sort((a, b) => {
      if (sortById) return b.id - a.id;
      else return a.id - b.id;
    });

    if (JSON.stringify(sortedPhotos) !== JSON.stringify(photos)) {
      dispatch(setPhotos(sortedPhotos));
    }
  }, [sortById, photos, dispatch]);

  return (
    <div className={s.filter}>
      <div className={s.filter}>
        <button onClick={() => setSortById(v => !v)}>
          Sort by id <Arrow size='10px' type={sortById ? 'down' : 'up'} />
        </button>
      </div>
    </div>
  );
};
