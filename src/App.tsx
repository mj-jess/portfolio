import { useTheme } from './hooks';

import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

function App() {
    const { theme } = useTheme();

    return (
        <div className={`${theme.background} min-h-screen`}>
            <Navbar />
            <Hero />
        </div>
    );
}

export default App;
