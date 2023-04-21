import React, { useContext } from "react";
import { LocaleContext } from "@/context/LocaleContext";
import Image from "next/image";
import { AppBar, Footer } from "@/components";

import styles from './project.module.scss';
import forcaMaxima from '../../assets/images/forca-maxima-app.png';

const Project = () => {
    const { translate } = useContext(LocaleContext);
    return (
        <section className={styles.projectPage}>
            <AppBar />
            <section className={styles.projectContent}>
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

                <section className={styles.projectInfos}>
                    <section className={styles.projectInfosContent}>
                        <section className={styles.infoBlock}>
                            <h2 className={styles.infoTitle}>Cliente:</h2>
                            <p className={styles.infoDescription}>Colégio Força Maxima</p>
                        </section>

                        <section className={styles.infoBlock}>
                            <h2 className={styles.infoTitle}>Tecnologias:</h2>
                            <p className={styles.infoDescription}>Colégio Força Maxima</p>
                        </section>

                        <section className={styles.infoBlock}>
                            <h2 className={styles.infoTitle}>Ano:</h2>
                            <p className={styles.infoDescription}>2021</p>
                        </section>

                        <section className={styles.infoBlock}>
                            <h2 className={styles.infoTitle}>Veja Online:</h2>
                            <p className={styles.infoDescription}>option</p>
                        </section>
                    </section>
                </section>
            <Footer />
            </section>
        </section>
        )
    }

    export default Project;