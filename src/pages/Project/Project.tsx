import React, { useContext } from "react";
import { LocaleContext } from "@/context/LocaleContext";

import { AppBar, Footer } from "@/components";

import styles from './project.module.scss';

const Project = () => {
    const { translate } = useContext(LocaleContext);
    return (
        <section className={styles.projectPage}>
            <AppBar />
            <section className={styles.projectContent}>
                <section className={styles.header}>
                    <section className={styles.infoContainer}>
                        <h1 className={styles.title}></h1>
                        <p className={styles.brief}></p>
                    </section>
                    <section className={styles.imageContainer}>

                    </section>
                    <div className={styles.boxShadow} />
                </section>

                <section className={styles.projectInfos}>

                </section>
            </section>
            <Footer />
        </section>
        )
    }

    export default Project;