import { useMemo } from 'react';
import { useLang } from '../hooks';
import { Button, Typography } from '../ui';

import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

export const Navbar = () => {
    const {
        t: { navbar },
    } = useLang();

    const sections = useMemo(() => {
        return Object.keys(navbar).filter((k) => k) as Array<
            keyof typeof navbar
        >;
    }, [navbar]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 shadow-lg backdrop-blur-[.5em]">
            <div className="mx-auto px-6 md:px-20 flex items-center justify-between h-16">
                <div className="flex-shrink-0 cursor-pointer">
                    <Typography.h2>JP</Typography.h2>
                </div>

                <div className="hidden md:flex">
                    {sections.map((section, i) => (
                        <Button
                            key={i}
                            variant="ghost"
                            color="tertiary"
                            onClick={() =>
                                document
                                    .getElementById(section)
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            {navbar[section]}
                        </Button>
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
