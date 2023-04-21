import React, { useState } from 'react';
import styles from './hamburguer.module.scss';
import clsx from "classnames";
import { Navigation } from '@/components/Navigation';

const SideBarMenu = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleHamburguer = () => {
        const body = document.body;
        const currentScrollPosition = window.scrollY;
    
        if (!body.classList.contains(styles.menuOpen)) {
            body.style.top = `-${currentScrollPosition}px`;
            body.dataset.y = currentScrollPosition.toString();
        } else {
            body.style.top = '0px';
            window.scrollTo(0, Number(body.dataset.y));
        }
    
        body.classList.toggle(styles.menuOpen);
        setIsClicked(!isClicked);
    };

    return (
        <>
            <div className={styles.hamburguerMenuButtonWrapper}>
                <button
                    id="button-menu"
                    className={clsx({
                        [styles.hamburguerMenuButton]: true,
                        [styles.hamburguerMenuButtonOpen]: isClicked,
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
                    [styles.menuSlideBar]: true,
                    [styles.menuSlideBarOpen]: isClicked,
                })}
            >
                <section className={styles.slideBarNavWrapper}>
                    <Navigation className={styles.mobiNav} />
                </section>
            </section>
        </>
    );
};

export const Hamburguer = React.memo(SideBarMenu);
