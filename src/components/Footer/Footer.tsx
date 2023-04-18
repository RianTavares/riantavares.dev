import React, { useContext } from 'react';
import Image from 'next/image';
import { LocaleContext } from '@/context/LocaleContext';

import Logo from '../../assets/images/rian-tavares-logo-white.svg';
import { Navigation } from '../Navigation';
import { Social } from '../Social';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './footer.module.scss';

export const Footer = () => {

    const { translate } = useContext(LocaleContext);
    
    return (
        <footer className={styles.footer}>
            <section className={styles.footerContainer}>
                <section className={styles.imageContainer}>
                    <Image className={styles.logo} src={Logo} alt="Rian Tavares Dev" />
                    <section className={styles.socialDesk}>
                        <Social />
                    </section>
                </section>
                <Navigation className={styles.footerNavigation} />
            </section>
            <section className={styles.copyrightContainer}>
                <section className={styles.copyrightContent}>
                    <p className={styles.copyright}>© RianTavaresDev 2023</p>
                    <section className={styles.socialMobi}>
                        <Social />
                    </section>
                    <aside className={styles.developedBy}>
                        {translate('components.footer.copyright1')}
                        <FontAwesomeIcon icon={faHeart} size="1x" />
                        {translate('components.footer.copyright2')}
                    </aside>
                </section>
            </section>
        </footer>
    )
}