import React from 'react';
import s from './Preloader.module.scss';

export enum PreloaderSize {
  small = 'small',
  large = 'large',
}

export enum PreloaderColor {
  secondary = 'secondary',
}

interface PreloaderProps {
  color?: PreloaderColor;
  size?: PreloaderSize;
}

const Preloader: React.FC<PreloaderProps> = ({ color, size }) => {
  const styleColor =
    color === PreloaderColor.secondary
      ? 'var(--color-secondary)'
      : 'var(--color-main)';
  const styleSize = size === PreloaderSize.small ? '6px' : '10px';

  return (
    <div
      className={s.loader}
      style={{ color: styleColor, fontSize: styleSize }}
    >
      Loading...
    </div>
  );
};

export default Preloader;
