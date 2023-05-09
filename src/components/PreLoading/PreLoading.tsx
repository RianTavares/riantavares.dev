import React from 'react';
import { AtomLoading } from '../AtomLoading';
import styles from './preLoading.module.scss';

export const PreLoading = () => {

    return (
        <div className={styles.main}>
            <AtomLoading />
        </div>
    )
}