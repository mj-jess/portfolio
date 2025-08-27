import { FiMapPin } from 'react-icons/fi';
import { Typography } from '../ui';
import { useLang, useTheme } from '../hooks';
import { useMemo } from 'react';

import avatar from '../assets/avatar.png';

export const AboutMe = () => {
    const { theme } = useTheme();
    const {
        t: { aboutMe },
        interpolate,
    } = useLang();

    const years = useMemo(() => {
        const startYear = 2015;
        const currentYear = new Date().getFullYear();

        return currentYear - startYear;
    }, []);

    const highlights = [
        { label: '📍 Guarapuava, PR' },
        { label: '💻 Replicar protótipos responsivos' },
        { label: '⚡ Agile' },
        { label: '🛠 Clean code' },
        { label: '🤝 Trabalho em equipe / cultura positiva' },
    ];

    return (
        <section
            id="about"
            className={`relative py-12 px-6 md:px-20 ${theme.secondaryBg}`}
        >
            <Typography.h2 className="text-center mb-8">
                {aboutMe.title}
            </Typography.h2>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                    <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-lg">
                        <img
                            src={avatar}
                            alt="Jess"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute -inset-2 rounded-full border-4 border-blue-500 opacity-50 animate-pulse"></div>
                    </div>
                </div>

                <Typography.p className="text-justify">
                    {interpolate(aboutMe.description, { years })}
                </Typography.p>
            </div>

            <div
                className={`flex-row rounded-xl shadow-md p-6 max-w-xs hover:opacity-75 transition mt-12 ${theme.surface} `}
            >
                <div className="flex items-center gap-2 mb-4">
                    <Typography.span>
                        <FiMapPin className="w-5 h-5" />
                    </Typography.span>

                    <Typography.h3>{aboutMe.location.label}</Typography.h3>
                </div>

                <Typography.p>{aboutMe.location.text}</Typography.p>
            </div>
        </section>
    );
};
