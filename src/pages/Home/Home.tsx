import React, { useContext, useEffect } from "react";
import { LocaleContext } from "@/context/LocaleContext";
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
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
    const router = useRouter();

    useEffect(() => {
        if (router.asPath.includes('#')) {
          const anchorId = router.asPath.split('#')[1];
          const anchorElement = document.getElementById(anchorId);
          if (anchorElement) {
            anchorElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [router.asPath]);
      
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