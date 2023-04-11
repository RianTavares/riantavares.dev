import React, { useState, useContext } from 'react';
import styles from './hamburguer.module.scss';
import clsx from "classnames";
import { Link } from '../Link';
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
                    <nav className={styles.mobiNav}>
                        <Link url="#aboutMe">{translate('components.appBar.aboutme')}</Link>
                        {/* <Link url="#">{translate('components.appBar.myjob')}</Link> */}
                        <Link url="#clients">{translate('components.appBar.clients')}</Link>
                        <Link url="#portfolio">{translate('components.appBar.portfolio')}</Link>
                        {/* <Link url="#">{translate('components.appBar.testimony')}</Link> */}
                        {/* <Link url="#">{translate('components.appBar.contact')}</Link> */}
                    </nav>
                </section>
            </section>
        </>
    )
}