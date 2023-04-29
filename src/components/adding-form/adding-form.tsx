import React, {useState} from "react";
import {AddingButton} from "../adding-button/adding-button";
import {AddingField} from "../adding-field/adding-field";

const INPUT_NAME = 'input';

export const ParentName = {
    Column: 'column',
    Card: 'card',
} as const;

interface AddingFormProps {
    handleFormSubmit(text: string): void;
    parentName: string;
}

export const AddingForm = (props: AddingFormProps) => {
    const {parentName, handleFormSubmit} = props;
    const [isAddingButtonHide, setIsAddingButtonHide] = useState(false);

    const toggleAddingButton = () => {
      setIsAddingButtonHide((prevState) => !prevState);
    };

    const validateFormData = (data: FormData) => {
        const value = data.get(INPUT_NAME);
        if (typeof value === 'string') {
            handleFormSubmit(value);
            setIsAddingButtonHide((prevState) => !prevState);
        }
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        validateFormData(new FormData(evt.currentTarget));
    };

    const handleKeyDown = (evt: React.KeyboardEvent<HTMLFormElement>) => {
        if (evt.key === 'Enter') {
            validateFormData(new FormData(evt.currentTarget));
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
            autoComplete={'off'}
        >
            { isAddingButtonHide ?
                <AddingField
                    name={INPUT_NAME}
                    handleCrossButtonClick={toggleAddingButton}
                />
                :
                <AddingButton
                    textContent={parentName}
                    handleButtonClick={toggleAddingButton}
                />
            }
        </form>
    );
}
