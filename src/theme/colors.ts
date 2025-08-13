import type { ThemeColors } from './types';

// theme/colors.ts
export const lightTheme: ThemeColors = {
    background: 'bg-white',
    surface: 'bg-gray-100',
    text: 'text-gray-900',
    textSecondary: 'text-gray-600',
    primary: 'text-blue-600',
    primaryBg: 'bg-blue-600',
    secondaryBg: 'bg-gray-200',
};

export const darkTheme: ThemeColors = {
    background: 'bg-gray-900',
    surface: 'bg-gray-800',
    text: 'text-gray-100',
    textSecondary: 'text-gray-400',
    primary: 'text-blue-400',
    primaryBg: 'bg-blue-500',
    secondaryBg: 'bg-gray-700',
};
