import React from 'react';
import styles from './Preloader.module.css';

export const Preloader: React.FC<{ size?: string; color?: string }> = ({
  size = '50px',
  color = '#0176FE',
}) => {
  return (
    <div className={styles.preloader}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox='0 0 38 38'
      >
        <defs>
          <linearGradient
            x1='8.042%'
            y1='0%'
            x2='65.682%'
            y2='23.865%'
            id={color}
          >
            <stop stopColor={color} stopOpacity='0' offset='0%' />
            <stop stopColor={color} stopOpacity='.631' offset='63.146%' />
            <stop stopColor={color} offset='100%' />
          </linearGradient>
        </defs>
        <g fill='none' fillRule='evenodd'>
          <g transform='translate(1 1)'>
            <path
              d='M36 18c0-9.94-8.06-18-18-18'
              id='Oval-2'
              stroke={`url(#${color})`}
              strokeWidth='2'
            >
              <animateTransform
                attributeName='transform'
                type='rotate'
                from='0 18 18'
                to='360 18 18'
                dur='0.9s'
                repeatCount='indefinite'
              />
            </path>
            <circle fill='#fff' cx='36' cy='18' r='1'>
              <animateTransform
                attributeName='transform'
                type='rotate'
                from='0 18 18'
                to='360 18 18'
                dur='0.9s'
                repeatCount='indefinite'
              />
            </circle>
          </g>
        </g>
      </svg>
    </div>
  );
};
