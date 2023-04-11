import React from 'react';
import styles from './arrow.module.scss';

type ArrowsProps = {
  type: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};


export const Arrow = ({ type, className, style, onClick }: ArrowsProps) => {
  const position = type === 'next' ? 'right' : 'left';
  return (
    <button
      type="button"
      className={`${styles.arrow} ${className}`}
      style={{
        ...style,
        display: 'flex',
        [position]: 0,
        width: 50,
        height: 100,
      }}
      onClick={onClick}
    >
      seta
    </button>
  );
};