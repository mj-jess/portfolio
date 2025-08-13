export type ThemeMode = 'light' | 'dark';

export type ThemeColors = {
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    primary: string;
    primaryBg: string;
    secondaryBg: string;
};

export type ThemeContextType = {
    mode: ThemeMode;
    theme: ThemeColors;
    toggleTheme: () => void;
};
