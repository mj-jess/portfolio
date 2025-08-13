import TypeWriter from 'typewriter-effect';

import { Typography } from '../ui';
import { useTheme, useLang } from '../hooks';

export const Hero = () => {
    const { theme } = useTheme();
    const {
        t: { hero },
    } = useLang();

    return (
        <section
            id="hero"
            className={`${theme.background} min-h-screen flex flex-col justify-center items-center px-6 md:px-20`}
        >
            <div className="text-center space-y-6">
                <Typography.h1 className="text-5xl md:text-6xl">
                    {hero.title}
                </Typography.h1>

                <Typography.h2 className="text-2xl md:text-3xl font-light">
                    <TypeWriter
                        options={{
                            loop: true,
                            delay: 100,
                            cursor: '|',
                            autoStart: true,
                            deleteSpeed: 50,
                            strings: hero.subtitle,
                        }}
                    />
                </Typography.h2>

                <Typography.p className="max-w-xl mx-auto text-lg md:text-xl">
                    {hero.description}
                </Typography.p>

                <button
                    className={`${theme.primaryBg} ${theme.text} px-6 py-3 rounded-md font-semibold hover:opacity-90 transition`}
                >
                    {hero.cta}
                </button>
            </div>
        </section>
    );
};
