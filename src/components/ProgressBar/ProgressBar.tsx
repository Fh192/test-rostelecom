import React from 'react';
import s from './ProgressBar.module.css';

interface Props {
  progress: number;
}

export const ProgressBar: React.FC<Props> = ({ progress }) => {
  return (
    <div className={s.progress}>
      <div className={s.bar} style={{ width: `${progress}%` }}></div>
    </div>
  );
};
