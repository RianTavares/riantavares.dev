import React from 'react';
import styles from '@/styles/globals.module.scss'
import { Home } from './Home';
import { AppBar } from '@/components/AppBar';

export default function HomePage() {
    return (
        <div className={styles.layout}>
            <AppBar />
            <Home />
        </div>
    )
}
