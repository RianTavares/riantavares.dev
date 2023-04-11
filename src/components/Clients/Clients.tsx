import React, { useContext } from 'react';

import { LocaleContext } from '@/context/LocaleContext';
import { ClientSlide } from './components/ClientSlide';

import styles from './clients.module.scss';

export const Clients = () => {
    const { translate } = useContext(LocaleContext);
    
    return (
        <section id="clients" className={styles.clients}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>{translate('components.clients.partnersTitle')}</h2>
                <p className={styles.subtitle}>{translate('components.clients.partnersSubTitle')}</p>
            </div>

            <div className={styles.clientsContainer}>
                <div className={styles.bubble}>
                </div>
                    <div className={styles.miniBubble1}></div>
                    <div className={styles.miniBubble2}></div>
                    <div className={styles.miniBubble3}></div>
            </div>
            
            <ClientSlide />
        </section>
    )
}