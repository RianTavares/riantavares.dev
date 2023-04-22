import React, { useContext } from "react";
import { LocaleContext } from "@/context/LocaleContext";
import { AppBar, Footer, ProjectHeader, ProjectInfoWrapper } from "@/components";

import styles from './project.module.scss';

const Project = () => {
    const { translate } = useContext(LocaleContext);

    return (
        <section className={styles.projectPage}>
            <AppBar />
            <section className={styles.projectContent}>
                <ProjectHeader />
                <ProjectInfoWrapper />
                <Footer />
            </section>
        </section>
        )
    }

    export default Project;