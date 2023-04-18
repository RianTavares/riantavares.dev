import React, { useContext } from "react";
import { LocaleContext } from "@/context/LocaleContext";

import { 
    AboutMe, 
    BannerTop, 
    Clients, 
    Footer, 
    Portfolio 
} from "@/components";
import styles from './home.module.scss';

const Home = () => {
    const { translate } = useContext(LocaleContext);
    return (
        <section className={styles.homeWrapper}>
            <BannerTop />
            <main className={styles.content}>
                <AboutMe />
                <section className={styles.clients}>
                    <Clients />
                </section>
                <p id="portfolio" className={styles.portfolio}>{translate('components.portfolio.title')}</p>
                <section>
                    <Portfolio />
                </section>
            </main>

            <Footer />
        </section>
        )
    }

    export default Home;