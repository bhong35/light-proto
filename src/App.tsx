import { FC, ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from 'router/Router';

const App: FC = (): ReactElement => {
    const content = useRoutes(routes);

    return (
        <div>{content}</div>
    );
};

export { App };