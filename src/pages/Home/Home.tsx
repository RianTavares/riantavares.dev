import React from "react";
import localeService from '../../locales/locales.service';

import { DarkModeToggle } from "@/components/ToggleTheme/ToggleTheme";
import { BannerTop } from "@/components/BannerTop";
import { AboutMe } from "@/components/AboutMe";
import { Clients } from "@/components/Clients";
import styles from './home.module.scss';

const Home = () => {
    return (
        <section className={styles.homeWrapper}>
            <BannerTop />
            <section className={styles.content}>
                <AboutMe />
                <section className={styles.clients}>
                    <Clients />
                </section>
                <p className={styles.portfolio}>Portfolio</p>
                <section>
                </section>
                <DarkModeToggle />
                {localeService.translate('screens.home.test')}
                <div style={{height: 10000, width: 20}}></div>

            </section>
        </section>
        )
    }

    export default Home;