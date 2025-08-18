import { useLang } from '../hooks';
import { Dropdown } from '../ui';

export const LanguageToggle = () => {
    const { lang, setLang } = useLang();

    return (
        <div className="flex items-center">
            <Dropdown className="w-auto">
                <Dropdown.Trigger>{lang.toLocaleUpperCase()}</Dropdown.Trigger>

                <Dropdown.Item onClick={() => setLang('en')}>EN</Dropdown.Item>
                <Dropdown.Item onClick={() => setLang('pt')}>PT</Dropdown.Item>
            </Dropdown>
        </div>
    );
};
