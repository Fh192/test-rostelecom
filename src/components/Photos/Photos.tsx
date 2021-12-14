import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../hooks';
import { getPhotos } from '../../store/reducers/photosReducer';
import { Preloader } from '../Preloader/Preloader';
import { LoadMore } from './LoadMore/LoadMore';
import { Photo } from './Photo/Photo';
import s from './Photos.module.css';

export const Photos: React.FC = () => {
  const dispatch = useDispatch();
  const { photos, page, search, isFetching, totalCount } = useSelector(
    s => s.photos
  );

  useEffect(() => {
    dispatch(getPhotos({ page, search }));
  }, [page, search, dispatch]);

  return (
    <div className={s.photos}>
      <ul className={s.list}>
        {photos.map(photo => (
          <Photo {...photo} key={photo.id} />
        ))}
      </ul>
      
      {isFetching && photos.length === 0 && (
        <div className={s.preloader}>
          <Preloader />
        </div>
      )}

      {!isFetching && totalCount === 0 && (
        <div className={s.noResults}>
          <span>
            No results for <span className={s.noResultsValue}>"{search}"</span>
          </span>
        </div>
      )}

      <LoadMore />
    </div>
  );
};
