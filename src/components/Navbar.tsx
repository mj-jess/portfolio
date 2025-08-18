import { useMemo } from 'react';
import { useLang, useTheme } from '../hooks';
import { Typography } from '../ui';

import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

export const Navbar = () => {
    const { theme } = useTheme();
    const {
        t: { navbar },
    } = useLang();

    const sections = useMemo(() => {
        return Object.keys(navbar).filter((k) => k) as Array<
            keyof typeof navbar
        >;
    }, [navbar]);

    return (
        <nav
            className={`${theme.surface} fixed top-0 left-0 w-full z-50 shadow-md`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-20 flex items-center justify-between h-16">
                <div className="flex-shrink-0 cursor-pointer">
                    <Typography.h2>JP</Typography.h2>
                </div>

                <div className="hidden md:flex space-x-8">
                    {sections.map((section, i) => (
                        <button
                            key={i}
                            onClick={() =>
                                document
                                    .getElementById(section)
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            <Typography.small>
                                {navbar[section]}
                            </Typography.small>
                        </button>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};
