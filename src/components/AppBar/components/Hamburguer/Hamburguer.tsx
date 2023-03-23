import React, { useState } from 'react';
import styles from './hamburguer.module.scss';
import clsx from "classnames";

export const Hamburguer = () => {
    const [isClicked, setIsClicked] = useState(false);

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

                </section>
            </section>
        </>
    )
}