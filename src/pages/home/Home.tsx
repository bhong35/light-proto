import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

const Home: FC = (): ReactElement => {
    return (
        <div>
            <div>
                Hello Worlds
            </div>
            <NavLink to="/about">
                About Me
            </NavLink>
        </div>
    )
}

export { Home };