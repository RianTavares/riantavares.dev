import React, { useEffect, useState, useContext } from 'react';

import { Hamburguer } from './components/Hamburguer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from '../Navigation';
import { Settings } from '../Settings';

import { LocaleContext } from '@/context/LocaleContext';
import styles from './appBar.module.scss';

export const AppBar = () => {
    const [styleTop, setStyleTop] = useState('0');
    const [openSettings, setOpenSetting] = useState(false);
    const { translate } = useContext(LocaleContext);


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
                  <Navigation className={styles.deskNavigation} />
                <section className={styles.iconWrapper}>
                  <button className={styles.iconButton} onClick={() => setOpenSetting(!openSettings)}>
                    <FontAwesomeIcon className={styles.settingsIcon} icon={faCog} />
                  </button>
                    <Settings isOpen={openSettings} onClickOutside={() => setOpenSetting(false)} />
                </section>
            </section>
        </header>
        )
}