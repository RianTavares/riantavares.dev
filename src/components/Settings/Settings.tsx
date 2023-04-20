import React, { useRef, useEffect, useContext } from 'react';

import { LocaleContext } from '@/context/LocaleContext';

import styles from './settings.module.scss';

import { DarkModeToggle } from '../ToggleTheme/ToggleTheme';
import { ToggleLocation } from '../ToggleLocation';

type SettingProps = {
    isOpen: boolean;
    onClickOutside: () => void;
};

  
export const Settings = ({ isOpen, onClickOutside }: SettingProps) => {
    const ref = useRef<HTMLBaseElement>(null);
    const { translate } = useContext(LocaleContext);

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                onClickOutside && onClickOutside();
            }
          };

        const handleClickOutside = (event: MouseEvent) => {
          if (isOpen && ref.current && !ref.current.contains(event.target as Node) && (event.target as HTMLElement)?.tagName !== 'svg') {
            onClickOutside && onClickOutside();
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        document.addEventListener('keydown', keyDownHandler, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
          document.removeEventListener('keydown', keyDownHandler, true);
        };
      }, [onClickOutside]);

    return (
        <aside 
          ref={ref} 
          className={`${styles.settings} ${isOpen ? styles.open : ''}`}
        >
            <div>
                <p className={styles.title}> {translate('components.settings.appearance')} </p>
                <DarkModeToggle />
            </div>
            <div>
                <p className={styles.title}> {translate('components.settings.language')} </p>
                <ToggleLocation />
            </div>
        </aside>
    )
}

