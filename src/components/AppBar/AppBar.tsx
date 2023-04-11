import React, { useEffect, useState, useContext } from 'react';

import { Hamburguer } from './components/Hamburguer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from './components/Link';
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
                  <nav className={styles.deskNavigation}>
                    <Link url="#aboutMe">{translate('components.appBar.aboutme')}</Link>
                    {/* <Link url="#">{translate('components.appBar.myjob')}</Link> */}
                    <Link url="#clients">{translate('components.appBar.clients')}</Link>
                    <Link url="#portfolio">{translate('components.appBar.portfolio')}</Link>
                    {/* <Link url="#">{translate('components.appBar.testimony')}</Link> */}
                    {/* <Link url="#">{translate('components.appBar.contact')}</Link> */}
                  </nav>
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