import { useTheme } from './hooks';

import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { AboutMe } from './components/AboutMe';

function App() {
    const { theme } = useTheme();

    return (
        <div className={`${theme.background} min-h-screen`}>
            <Navbar />
            <Hero />
            <AboutMe />
        </div>
    );
}

export default App;
