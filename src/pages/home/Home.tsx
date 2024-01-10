import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { InputForm } from 'components';
import { inputFormProps } from './testValues';

// * testValues
const {
    inputFormOptions,
    inputFormOnChange,
    inputFormPlaceholder
 } = inputFormProps;

const Home: FC = ({}): ReactElement => {
    return (
        <div>
            <div>
                Hello World
            </div>
            <NavLink to="/about">
                About Me
            </NavLink>
            <InputForm
                options={inputFormOptions}
                onChange={inputFormOnChange}
                placeholder={inputFormPlaceholder}
            />
        </div>
    )
}

export { Home };