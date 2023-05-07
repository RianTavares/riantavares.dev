import React from 'react';
import Image from 'next/image';
import { DemoLinks } from '../DemoLinks';

import styles from './projectInfoWrapper.module.scss';
import expoIcon from '../../assets/images/stack-icons/expo-icon.png';
import styledComponent from '../../assets/images/stack-icons/styled-component-icon.png';
import reactIcon from '../../assets/images/stack-icons/react-icon.png';
import reduxIcon from '../../assets/images/stack-icons/redux-icon.png';


type ProjectInfoWrapperType = {
    client: string;
    stack: {};
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
                    <section className={styles.stackIconsContainer}>
                        <Image src={expoIcon} alt="Expo" title="Expo"/>
                        <Image src={reactIcon} alt="React" />
                        <Image src={styledComponent} alt="Styled Components" />
                        <Image src={reduxIcon} alt="Redux" />
                    </section>
                </section>
            </div>
            <div className={styles.column}>
                <section className={styles.infoBlock}>
                    <h2 className={styles.infoTitle}>Ano:</h2>
                    <p className={styles.infoDescription}>2021</p>
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