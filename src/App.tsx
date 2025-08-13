import { Typography } from './ui';

function App() {
    return (
        <>
            <div className="p-8 space-y-4">
                <Typography.h1>Este é o H1</Typography.h1>
                <Typography.h2>Este é o H2</Typography.h2>
                <Typography.h3>Este é o H3</Typography.h3>
                <Typography.h4>Este é o H4</Typography.h4>
                <Typography.p>Este é um parágrafo (body text)</Typography.p>
                <Typography.small className="block">
                    Este é um texto pequeno
                </Typography.small>
                <Typography.caption>Este é um caption</Typography.caption>
            </div>
        </>
    );
}

export default App;
