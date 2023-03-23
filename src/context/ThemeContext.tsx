import { createContext, useEffect, useState, useCallback } from "react";

const THEME_TOKEN = 'rtdev@theme';

type ThemeContextType = {
    theme: string;
    toggleTheme: (checked: boolean) => void;
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
};

type WithChildrenProps = {
    children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {},
    isDark: true,
    setIsDark: () => {}
});

export const ThemeProvider = ({children}: WithChildrenProps) => {
    const [theme, setTheme] = useState('dark');
    const [isDark, setIsDark] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState(true);

    const setDocumentTheme = (theme: string) => {
        document.documentElement.setAttribute('data-theme', theme);
    };

    const detectColorScheme = useCallback(() => {
        const darkModeQuery = '(prefers-color-scheme: dark)';
        const localTheme = localStorage.getItem('rtdev@theme');
        const colorScheme = localTheme || (window.matchMedia && window.matchMedia(darkModeQuery).matches ? 'dark' : 'light');
        const isDark = colorScheme === 'dark';
    
        setTheme(colorScheme);
        setIsDark(isDark);
        setDocumentTheme(colorScheme);
    },[]);

    const toggleTheme = (checked: boolean) => {
        const newTheme = checked ? 'dark' : 'light';
        localStorage.setItem('rtdev@theme', newTheme);
        
        setDocumentTheme(newTheme);
        setTheme(newTheme);
        setIsDark(checked);
    };

    useEffect(() => {
        detectColorScheme();
        setIsLoading(false);
    },[detectColorScheme])

    if(isLoading) return <div>Loading...</div>

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark, setIsDark }}>
            {children}
        </ThemeContext.Provider>
    )
}