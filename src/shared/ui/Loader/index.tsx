import React from 'react';

import styles from './styles.module.scss';

type TLoader = {
  text?: string;
};
export const Loader: React.FC<TLoader> = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.hexagon} aria-label="Animated hexagonal ripples">
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
        </div>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
        </div>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
        </div>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
        </div>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
        </div>
      </div>
      {text && <p aria-label="Loading">{text}</p>}
    </div>
  );
};
