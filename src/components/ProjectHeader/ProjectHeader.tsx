import React from 'react';
import Image from 'next/image';

import forcaMaxima from '../../assets/images/forca-maxima-app.png';
import styles from './projectHeader.module.scss';

export const ProjectHeader = () => {
    return (
        <section className={styles.header}>
        <section className={styles.headerContent}>
            <section className={styles.infoContainer}>
                <h1 className={styles.title}>APP MÓVEL ESCOLAR</h1>
                <p className={styles.brief}>
                    Aplicativo desenvolvido em React Native com foco na comunidade de responsáveis 
                    e alunos do Colégio Força Máxima. Nele é possível acessar informações individuais, 
                    materiais extras, avisos e conteúdos exclusivos. O Aplicativo está disponível na 
                    App Store e Google Play.
                </p>
            </section>
            <section className={styles.imageContainer}>
                <Image src={forcaMaxima} alt="App Força Maxima"/>
            </section>
        </section>
    </section>
    )
}