import React, { useContext } from "react";
import Toggle from "react-toggle";
import { ThemeContext } from '../../context/ThemeContext';

export const DarkModeToggle: React.FC = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);

  return (
    <Toggle
      className="dark-mode-toggle"
      checked={isDark}
      onChange={({ target }) => toggleTheme(target.checked)}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode toggle"
    />
  );
};
