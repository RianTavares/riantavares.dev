import React from 'react';
import { AtomLoadingProps } from '@/types/atomLoading';

import styles from './atomLoading.module.scss';

export const AtomLoading = ({ title }: AtomLoadingProps) => {

    return (
    <aside style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16
    }}>
        <div className={styles.atom}>
            <div className={styles.electron}></div>
            <div className={styles.electronAlpha}></div>
            <div className={styles.electronOmega}></div>
        </div>
        {title && (
            <div style={{
                display: 'flex',
                gap: 24,
                alignItems: 'center'
            }}>
                <p className={styles.helperText}>{title}</p>
                <div className="snippet" data-title="dot-pulse">
                    <div className="stage">
                        <div className="dot-pulse"></div>
                    </div>
                </div>
            </div>
        )}
    </aside>
    )
}