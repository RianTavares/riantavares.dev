import React from "react";
import localeService from '../../locales/locales.service';

import { DarkModeToggle } from "@/components/ToggleTheme/ToggleTheme";
import { BannerTop } from "@/components/BannerTop";
import { AboutMe } from "@/components/AboutMe";
import { Patch } from "@/components/Patch";

import styles from './home.module.scss';

const Home = () => {
    return (
        <section className={styles.homeWrapper}>
            <BannerTop />
            <section className={styles.content}>
                <AboutMe />
                <DarkModeToggle />
                {localeService.translate('screens.home.test')}
                <div style={{height: 10000, width: 20}}></div>

            </section>
        </section>
        )
    }

    export default Home;