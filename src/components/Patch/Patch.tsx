import React from 'react';
import styles from './patch.module.scss';
import Image from 'next/image';

type PatchProsp = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    pacthStyle?: React.CSSProperties;
};

export const Patch = ({ children, style, pacthStyle }: PatchProsp) => {
    return (
      <div className={styles.center} style={{ ...style }}>
        <div className={styles.thirteen} style={{ ...pacthStyle }}>
          <div className={styles.children}>
            {children}
          </div>
        </div>
      </div>
    )
}