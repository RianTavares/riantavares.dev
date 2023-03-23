import React, { useState } from 'react';
import styles from './hamburguer.module.scss';
import clsx from "classnames";
import { Link } from '../Link';
import localesService from '@/locales/locales.service';

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
                    <nav className={styles.mobiNav}>
                        <Link url="#">{localesService.translate('components.appBar.aboutme')}</Link>
                        <Link url="#">{localesService.translate('components.appBar.myjob')}</Link>
                        <Link url="#">{localesService.translate('components.appBar.portfolio')}</Link>
                        <Link url="#">{localesService.translate('components.appBar.testimony')}</Link>
                        <Link url="#">{localesService.translate('components.appBar.contact')}</Link>
                    </nav>
                </section>
            </section>
        </>
    )
}