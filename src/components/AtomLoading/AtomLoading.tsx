import React, { useEffect } from 'react';
import styles from './atomLoading.module.scss';

export const AtomLoading = () => {

    return (
        <div className={styles.main}>
            <div className={styles.atom}>
                <div className={styles.electron}></div>
                <div className={styles.electronAlpha}></div>
                <div className={styles.electronOmega}></div>
            </div>
        </div>
        )
    }