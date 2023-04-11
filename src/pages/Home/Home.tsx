import React, { useContext } from "react";
import { LocaleContext } from "@/context/LocaleContext";

import { BannerTop } from "@/components/BannerTop";
import { AboutMe } from "@/components/AboutMe";
import { Clients } from "@/components/Clients";
import { Portfolio } from '@/components/Portfolio';
import styles from './home.module.scss';

const Home = () => {
    const { translate } = useContext(LocaleContext);
    return (
        <section className={styles.homeWrapper}>
            <BannerTop />
            <section className={styles.content}>
                <AboutMe />
                <section className={styles.clients}>
                    <Clients />
                </section>
                <p id="portfolio" className={styles.portfolio}>{translate('components.portfolio.title')}</p>
                <section>
                    <Portfolio />
                </section>

            </section>
        </section>
        )
    }

    export default Home;