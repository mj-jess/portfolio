import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { ThemeProvider } from './theme';
import { I18nProvider } from './i18n/index.tsx';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <I18nProvider>
                <App />
            </I18nProvider>
        </ThemeProvider>
    </StrictMode>
);
