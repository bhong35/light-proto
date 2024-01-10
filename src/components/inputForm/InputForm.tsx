import { ChangeEvent, FC, ReactElement } from 'react';

interface IInputForm {
    options: string[]
    placeholder: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    className?: string
};

const InputForm: FC<IInputForm> = ({
    options,
    placeholder,
    onChange,
    className
}): ReactElement => {
    return (
        <div>
            {options &&
                options.map((option: string) => (
                    <form className={className}>
                        <label id={`${className}-${option}-label`}>{option}</label>
                        <input
                            type="text"
                            id={`${className}-${option}"-text`}
                            onChange={onChange}
                            placeholder={placeholder}
                        >
                        </input>
                        <input type="submit" id={`${className}-${option}-submit`} value="Submit"></input>
                    </form>
                ))
            }
        </div>
    )
}

export { InputForm };