import React, { useContext } from 'react';
import clsx from "classnames";
import { Navigation } from '@/components/Navigation';
import { MenuControlContext } from '@/context/MenuControlContext';

import styles from './hamburguer.module.scss';

const SideBarMenu = () => {
    const { isMenuOpen, clickHandler } = useContext(MenuControlContext);

    return (
        <>
            <div className={styles.hamburguerMenuButtonWrapper}>
                <button
                    id="button-menu"
                    className={clsx({
                        [styles.hamburguerMenuButton]: true,
                        [styles.hamburguerMenuButtonOpen]: isMenuOpen,
                    })}
                    type="button"
                    onClick={clickHandler}
                >
                    menu
                </button>
            </div>
            <section
                id="menu-slide-bar"
                className={clsx({
                    [styles.menuSlideBar]: true,
                    [styles.menuSlideBarOpen]: isMenuOpen,
                })}
            >
                <section className={styles.slideBarNavWrapper}>
                    <Navigation className={styles.mobiNav} isClickable />
                </section>
            </section>
        </>
    );
};

export const Hamburguer = React.memo(SideBarMenu);
