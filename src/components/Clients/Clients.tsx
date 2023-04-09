import React from 'react';
import styles from './clients.module.scss';
import { ClientSlide } from './components/ClientSlide';

export const Clients = () => {
    return (
        <section className={styles.clients}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Parceiros</h2>
                <p className={styles.subtitle}>aqui e ali</p>
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