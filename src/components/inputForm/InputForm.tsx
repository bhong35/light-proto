import { ChangeEvent, FC, ReactElement } from 'react';

interface IInputForm {
    options?: string[]
    value?: string
    onChange: (inputString: string) => ChangeEvent
    className?: string
};

const InputForm: FC<IInputForm> = ({
    options,
    value,
    onChange,
    className
}): ReactElement => {
    return (
        <div>
            {options && {
                options.map((option: string) => (
                    <form className={className}>
                        <label id={`${className}-${option}-label`}>{option}</label>
                        <input
                            type="text"
                            id={`${className}-${option}"-text`}
                            onChange={onChange}
                            placeholder={value}
                        >
                        </input>
                        <input type="submit" id={`${className}-${option}-submit`} value="Submit"></input>
                    </form>
                ))
            }}
        </div>
    )
}

export { InputForm };