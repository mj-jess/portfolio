import { useContext } from 'react';
import { I18nContext, interpolate } from '../i18n';

export const useLang = () => {
    const context = useContext(I18nContext);

    if (!context) throw new Error('useLang must be used within I18nProvider');

    return {
        ...context,
        interpolate: (text: string, vars?: Record<string, string | number>) =>
            interpolate(text, vars),
    };
};
