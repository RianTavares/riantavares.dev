import React, { useContext } from 'react';

import { SplineLoadContext } from '@/context/SplineLoadContext';
import { AtomLoading, AppBar } from '@/components';
import Home from './Home';

import styles from './index.module.scss'

export default function HomePage() {
    const { isLoading } = useContext(SplineLoadContext);

    return (
        <div className={styles.layout}>
            {isLoading && <AtomLoading />}
            <AppBar />
            <Home />
        </div>
    )
}
