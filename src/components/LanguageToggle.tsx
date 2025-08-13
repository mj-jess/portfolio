import { useLang } from '../hooks';

export const LanguageToggle = () => {
    const { lang, setLang } = useLang();

    return (
        <div className="flex items-center">
            <label htmlFor="language-select" className="sr-only">
                Select Language
            </label>

            <select
                id="language-select"
                value={lang}
                onChange={(e) => setLang(e.target.value as 'en' | 'pt')}
                className="p-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
                <option value="en">EN</option>
                <option value="pt">PT-BR</option>
            </select>
        </div>
    );
};
