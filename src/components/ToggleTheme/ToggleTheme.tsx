import React, { useContext } from "react";
import Toggle from "react-toggle";
import { ThemeContext } from '../../context/ThemeContext';
import styles from './toggleTheme.module.scss';

export const DarkModeToggle: React.FC = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);

  return (
    <Toggle
      className={styles.darkModeToggle}
      checked={isDark}
      onChange={({ target }) => toggleTheme(target.checked)}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode toggle"
    />
  );
};
