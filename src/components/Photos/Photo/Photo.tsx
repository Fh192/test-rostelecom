import React from 'react';
import type { IPhoto } from '../../../types';
import s from './Photo.module.css';

export const Photo: React.FC<IPhoto> = ({ id, url, title }) => {
  return (
    <li className={s.photo}>
      <div className={s.inner}>
        <img src={url} alt='' />
      </div>
      <div className={s.col}>
        <span>id: {id}</span>
        <div className={s.title}>
          <h1 title={title}>{title}</h1>
        </div>
      </div>
    </li>
  );
};
