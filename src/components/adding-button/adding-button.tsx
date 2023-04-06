import css from './adding-button.module.css';

interface AddingButtonProps {
    textContent: string;
    handleButtonClick(): void;
}

export const AddingButton = (props: AddingButtonProps) => {
    const {textContent, handleButtonClick} = props;

    return (
        <button type={'button'} className={css.button} onClick={handleButtonClick}>
            {`add ${textContent}`}
        </button>
    );
}
