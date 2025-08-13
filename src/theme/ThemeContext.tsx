import type { ReactNode } from 'react';
import { createContext, useState, useEffect } from 'react';

import { lightTheme, darkTheme } from './colors';
import type { ThemeContextType, ThemeMode } from './types';

export const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<ThemeMode>(() => {
        const saved = localStorage.getItem('theme') as ThemeMode | null;
        return saved ?? 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', mode);
    }, [mode]);

    const toggleTheme = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const theme = mode === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ mode, theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
