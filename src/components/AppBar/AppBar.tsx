import React, { useEffect, useState } from 'react';
import styles from './appBar.module.scss';
import { Hamburguer } from './components/Hamburguer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from './components/Link';
import localesService from '@/locales/locales.service';

export const AppBar = () => {
    const [styleTop, setStyleTop] = useState('0');


    const autoHideMenuOnScroll = (prevScrollpos: number) => () => {
      const currentScrollPos = window.pageYOffset;
    
      if (currentScrollPos <= 100) {
        setStyleTop('0');
      } else {
        setStyleTop(prevScrollpos > currentScrollPos ? '0' : '-100px');
      }
    
      prevScrollpos = currentScrollPos;
    };
    
    useEffect(() => {
      let prevScrollpos = window.pageYOffset;
      const wrappedHandleScroll = autoHideMenuOnScroll(prevScrollpos);
    
      window.addEventListener('scroll', wrappedHandleScroll);
    
      return () => {
        window.removeEventListener('scroll', wrappedHandleScroll);
      };
    }, []);
    
    return (
        <header className={styles.appBar} style={{ top: styleTop }}>
            <section className={styles.appBarWrapper}>
                <Hamburguer />
                  <nav className={styles.deskNavigation}>
                    <Link url="#">{localesService.translate('components.appBar.aboutme')}</Link>
                    <Link url="#">{localesService.translate('components.appBar.myjob')}</Link>
                    <Link url="#">{localesService.translate('components.appBar.portfolio')}</Link>
                    <Link url="#">{localesService.translate('components.appBar.testimony')}</Link>
                    <Link url="#">{localesService.translate('components.appBar.contact')}</Link>
                  </nav>
                <section className={styles.iconWrapper}>
                    <FontAwesomeIcon className={styles.settingsIcon} icon={faCog} />
                </section>
            </section>
        </header>
        )
}