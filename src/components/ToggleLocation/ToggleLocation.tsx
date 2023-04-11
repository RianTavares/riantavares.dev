import React, { useContext } from "react";
import Image from "next/image";

import { LocaleContext } from '../../context/LocaleContext';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import en from '../../assets/images/en-icon.png';
import pt from '../../assets/images/pt-icon.png';

import styles from './toggleLocation.module.scss';

export const ToggleLocation: React.FC = () => {
  const { toggleLocation, setLocale, locale, isEn} = useContext(LocaleContext);

  return (
    <>
      <input 
        className={styles.toggleLocation} 
        onChange={({ target }) => {toggleLocation(target.checked); setLocale(target.checked? 'en' : 'pt-BR')}}
        type="checkbox" 
        name="switch-location" 
        id="switch-location" 
        checked={isEn}
        />
      <label className={styles.locationToggleLabel} htmlFor="switch-location">
        <p className={styles.enShortCut} >
          EN
        </p>

        <p className={styles.ptShortCut} >
         PT
        </p>
      </label>
    </>
  );
};
