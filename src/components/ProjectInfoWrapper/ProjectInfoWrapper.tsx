import React from 'react';
import { DemoLinks } from '../DemoLinks';
import { StackIcons } from '../StackIcons';

import styles from './projectInfoWrapper.module.scss';


type ProjectInfoWrapperType = {
    client: string;
    stack: { name: string[] };
    year: string;
    demo: {};
  }

export const ProjectInfoWrapper = ({ client, stack, year, demo }: ProjectInfoWrapperType) => {
    console.log(demo)
    return (
        <section className={styles.projectInfos}>
        <section className={styles.projectInfosContent}>
            <div className={styles.column}>
                <section className={styles.infoBlock}>
                    <h2 className={styles.infoTitle}>Cliente:</h2>
                    <p className={styles.infoDescription}>{client}</p>
                </section>

                <section className={styles.infoBlock}>
                    <h2 className={styles.infoTitle}>Tecnologias:</h2>
                    <StackIcons names={stack.name} />
                </section>
            </div>
            <div className={styles.column}>
                <section className={styles.infoBlock}>
                    <h2 className={styles.infoTitle}>Ano:</h2>
                    <p className={styles.infoDescription}>{year}</p>
                </section>

                <section className={styles.infoBlock}>
                    <h2 className={styles.infoTitle}>Veja Online:</h2>
                    <div className={styles.liveDemo}><DemoLinks demo={demo} /></div>
                </section>
            </div>
        </section>
    </section>
    )
}