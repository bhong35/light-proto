import { ChangeEvent } from 'react';
import { IInputForm } from '../components/inputForm/InputForm';

const inputFormOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
};

const inputFormProps: IInputForm = {
    inputFormOptions: ['date', 'task'],
    inputFormOnChange,
    inputFormPlaceholder: "What did you accomplish today?",
    inputFormClassName: "TaskList"
};

const taskListProps = {
    taskListClassName: "TaskList"
};

export {
    inputFormProps,
    taskListProps
};