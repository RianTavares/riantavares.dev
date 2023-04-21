import React, { useContext } from "react";
import { LocaleContext } from '../../context/LocaleContext';

import styles from './toggleLocation.module.scss';

export const ToggleLocationSwitch: React.FC = () => {
  const { toggleLocation, setLocale, isEn} = useContext(LocaleContext);

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

export const ToggleLocation = React.memo(ToggleLocationSwitch);

