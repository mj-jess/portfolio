import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggler = () => {
    const { mode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
        >
            {mode === 'dark' ? (
                <FiSun className="text-yellow-400 w-5 h-5" />
            ) : (
                <FiMoon className="text-gray-900 w-5 h-5" />
            )}
        </button>
    );
};
