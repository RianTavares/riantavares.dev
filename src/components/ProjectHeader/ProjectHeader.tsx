import React from 'react';
import Image from 'next/image';

import styles from './projectHeader.module.scss';

type ProjectHeaderType = {
    imageSource: string;
    title: string;
    description: string;
  }

export const ProjectHeader = ({ title, description, imageSource }: ProjectHeaderType) => {
    return (
        <section className={styles.header}>
        <section className={styles.headerContent}>
            <section className={styles.infoContainer}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.brief}>
                    {description}
                </p>
            </section>
            <section className={styles.imageContainer}>
                <Image 
                    src={imageSource} 
                    alt={title}
                    width={100} 
                    height={100} 
                    loading="eager"
                    unoptimized
                />
            </section>
        </section>
    </section>
    )
}