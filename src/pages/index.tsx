import React from 'react';

import { AppBar } from '@/components/AppBar';
import Home from './Home';
import styles from './index.module.scss'

export default function HomePage() {
    return (
        <div className={styles.layout}>
            <AppBar />
            <Home />
        </div>
    )
}
