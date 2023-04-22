import React, { useEffect, useState, useContext } from 'react';

import { Hamburguer } from './components/Hamburguer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from '../Navigation';
import { Settings } from '../Settings';

import styles from './appBar.module.scss';

export const AppBar = () => {
  const [styleTop, setStyleTop] = useState('0');
  const [openSettings, setOpenSetting] = useState(false);


  const autoHideMenuOnScroll = (prevScrollpos: number, aboutMeOffsetTop: number) => () => {
    const currentScrollPos = window.pageYOffset;
  
    if (currentScrollPos <= aboutMeOffsetTop) {
      setStyleTop('0');
    } else {
      setStyleTop(prevScrollpos > currentScrollPos ? '0' : '-100px');
    }
  
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    const aboutMeElement = document.getElementById('aboutMe');
    const aboutMeOffsetTop = aboutMeElement?.offsetTop ?? 0;

    const wrappedHandleScroll = autoHideMenuOnScroll(prevScrollpos, aboutMeOffsetTop);

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