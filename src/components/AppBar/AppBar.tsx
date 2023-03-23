import React, { useEffect, useState } from 'react';
import styles from './appBar.module.scss';
import { Hamburguer } from './components/Hamburguer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

export const AppBar = () => {
    const [styleTop, setStyleTop] = useState('0');


    const autoHideMenuOnScroll = (prevScrollpos: number) => () => {
        const currentScrollPos = window.pageYOffset;
        setStyleTop(prevScrollpos > currentScrollPos ? '0' : '-100px');
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
                <section className={styles.iconWrapper}>
                    <FontAwesomeIcon className={styles.settingsIcon} icon={faCog} size="2x" />
                </section>
            </section>
        </header>
        )
}