import React, { useState, useContext } from 'react';
import styles from './hamburguer.module.scss';
import clsx from "classnames";
import { Navigation } from '@/components/Navigation';
import { LocaleContext } from '@/context/LocaleContext';

export const Hamburguer = () => {
    const [isClicked, setIsClicked] = useState(false);
    const { translate } = useContext(LocaleContext);

    const handleHamburguer = () => {
        const body = document.body;
        body.classList.toggle(styles.menuOpen);
        setIsClicked(!isClicked);
    }

    return (
        <>
            <div className={styles.hamburguerMenuButtonWrapper}>
                <button 
                    id="button-menu" 
                    className={clsx({
                        [styles.hamburguerMenuButton] : true,
                        [styles.hamburguerMenuButtonOpen] : isClicked 
                    })} 
                    type="button" 
                    onClick={handleHamburguer}
                >
                    menu
                </button>
            </div>
            <section 
                id="menu-slide-bar" 
                className={clsx({
                    [styles.menuSlideBar] : true,
                    [styles.menuSlideBarOpen] : isClicked 
                })} 
            >
                <section className={styles.slideBarNavWrapper}>
                    <Navigation className={styles.mobiNav} />
                </section>
            </section>
        </>
    )
}