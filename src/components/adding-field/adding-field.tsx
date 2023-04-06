import css from './adding-field.module.css';

interface AddingFieldProps {
    name: string;
    handleCrossButtonClick(): void;
}

export const AddingField = (props: AddingFieldProps) => {
    const {name, handleCrossButtonClick} = props;

    return (
        <fieldset>
            <input
                className={css.input}
                type='text'
                title=''
                name={name}
                placeholder='write here ...'
                required
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
