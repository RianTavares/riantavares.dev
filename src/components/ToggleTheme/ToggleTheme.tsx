import React, { useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext';
import styles from './toggleTheme.module.scss';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ToggleThemeSwitch: React.FC = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);

  return (
    <>
      <input 
        className={styles.darkModeToggle} 
        onChange={({ target }) => toggleTheme(target.checked)}
        type="checkbox" 
        name="switch" 
        id="switch" 
        checked={isDark}
        />
      <label className={styles.toggleLabel} htmlFor="switch">
        <div className={styles.moonIcon} >
          <FontAwesomeIcon icon={faMoon} />
        </div>

        <div className={styles.sunIcon} >
          <FontAwesomeIcon icon={faSun} />
        </div>
      </label>
    </>
  );
};

export const ToggleTheme = React.memo(ToggleThemeSwitch);

