import { useContext } from 'react';
import { I18nContext } from '../i18n';

export const useLang = () => {
    const context = useContext(I18nContext);

    if (!context) throw new Error('useLang must be used within I18nProvider');

    return context;
};
