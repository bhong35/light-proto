import { FC, ReactElement } from 'react';
import { InputForm } from '../inputForm/InputForm';
import { inputFormProps, taskListProps } from '../../assets/dummyData';

// * dummyData
const {
    inputFormOptions,
    inputFormPlaceholder,
    inputFormOnChange,
    inputFormClassName
 } = inputFormProps;
const { taskListClassName } = taskListProps;

export interface ITaskList {
    taskListClassName?: string
};

const TaskList: FC<ITaskList> = (): ReactElement => {
    return (
        <div className={taskListClassName}>
            <InputForm
                inputFormOptions={inputFormOptions}
                inputFormPlaceholder={inputFormPlaceholder}
                inputFormOnChange={inputFormOnChange}
                inputFormClassName={inputFormClassName}
            />
        </div>
    );
};

export { TaskList };