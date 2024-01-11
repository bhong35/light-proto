import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { TaskList } from 'components';

const Home: FC = (): ReactElement => {
    return (
        <div>
            <div>
                Hello World
            </div>
            <NavLink to="/about">
                About Me
            </NavLink>
            <TaskList />
        </div>
    );
};

export { Home };