import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../hooks';
import { Button } from '../ui';

export const ThemeToggle = () => {
    const { mode, toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            color="tertiary"
            onClick={toggleTheme}
            className="p-2 w-5 transition-colors"
            aria-label="Toggle theme"
        >
            {mode === 'dark' ? (
                <FiSun className="text-yellow-400 w-5 h-5" />
            ) : (
                <FiMoon className="text-gray-900 w-5 h-5" />
            )}
        </Button>
    );
};
