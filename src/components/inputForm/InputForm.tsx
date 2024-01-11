import { ChangeEvent, FC, ReactElement } from 'react';

export interface IInputForm {
    inputFormOptions: string[]
    inputFormPlaceholder: string
    inputFormOnChange: (event: ChangeEvent<HTMLInputElement>) => void
    inputFormClassName: string
};

const InputForm: FC<IInputForm> = ({
    inputFormOptions,
    inputFormPlaceholder,
    inputFormOnChange,
    inputFormClassName
}): ReactElement => {
    return (
        <div>
            {inputFormOptions &&
                inputFormOptions.map((option: string) => (
                    <form className={inputFormClassName}>
                        <label id={`${inputFormClassName}-${option}-label`}>{option}</label>
                        <input
                            type="text"
                            id={`${inputFormClassName}-${option}"-text`}
                            onChange={inputFormOnChange}
                            placeholder={inputFormPlaceholder}
                        >
                        </input>
                        <input type="submit" id={`${inputFormClassName}-${option}-submit`} value="Submit"></input>
                    </form>
                ))
            }
        </div>
    );
};

export { InputForm };