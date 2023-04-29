import css from './adding-field.module.css';
import {useFocus} from "../../hooks/use-focus/use-focus";

interface AddingFieldProps {
    name: string;

    handleCrossButtonClick(): void;
}

export const AddingField = (props: AddingFieldProps) => {
    const {name, handleCrossButtonClick} = props;
    const ref = useFocus();
    return (
        <fieldset>
            <input
                className={css.input}
                type='text'
                title=''
                name={name}
                placeholder='write here ...'
                required
                ref={ref}
            />
            <button type='submit'>
                +
            </button>
            <button type='button' onClick={handleCrossButtonClick}>
                x
            </button>
        </fieldset>
    );
}
