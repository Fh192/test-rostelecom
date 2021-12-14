import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../hooks';
import { setPage } from '../../../store/reducers/photosReducer';
import { Preloader } from '../../Preloader/Preloader';
import { ProgressBar } from '../../ProgressBar/ProgressBar';
import s from './LoadMore.module.css';

export const LoadMore: React.FC = () => {
  const dispatch = useDispatch();

  const { photos, page, totalCount, isFetching } = useSelector(s => s.photos);
  const progress = Math.round((photos.length / totalCount) * 100);
  const btnDisabled = photos.length === totalCount;

  const increasePage = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className={s.loadMore}>
      <span>
        You have viewed {photos.length} of {totalCount} photos
      </span>
      <ProgressBar progress={progress} />
      <button onClick={increasePage} disabled={btnDisabled || isFetching}>
        {isFetching ? <Preloader size='25px' /> : 'Load more'}
      </button>
    </div>
  );
};
