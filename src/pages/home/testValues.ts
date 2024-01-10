import { ChangeEvent } from 'react';

const inputFormOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
};

export const inputFormProps = {
    inputFormOptions: ['date', 'task'],
    inputFormOnChange,
    inputFormPlaceholder: "What did you accomplish today?"
};