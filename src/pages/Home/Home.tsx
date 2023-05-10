import React, { useContext } from "react";
import { LocaleContext } from "@/context/LocaleContext";
import { NextSeo } from 'next-seo';

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
        <>
            <NextSeo
                title={`${translate('pages.home.title')} - RianTavaresDev`}
                description={translate('pages.home.description')}
            />
            <section className={styles.homeWrapper}>
                <BannerTop />
                <main className={styles.content}>
                    <AboutMe />
                    <section className={styles.clients}>
                        <Clients />
                    </section>
                    <p id="portfolio" className={styles.portfolio}>{translate('components.portfolio.title')}</p>
                    <section className={styles.portfolioSection}>
                        <Portfolio />
                    </section>
                </main>

                <Footer />
            </section>
        </>
        )
    }

    export default Home;