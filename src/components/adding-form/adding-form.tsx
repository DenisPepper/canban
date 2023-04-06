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

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const value = new FormData(evt.currentTarget).get(INPUT_NAME);
        if (typeof value === 'string') {
            handleFormSubmit(value);
            setIsAddingButtonHide((prevState) => !prevState);
        }
    };

    return (
        <form onSubmit={handleSubmit} autoComplete={'off'}>
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
