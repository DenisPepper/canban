import React from "react";
import {Field} from "../field/field";

export const App = () => {
    return (
        <div>
            <h1 className={'visually-hidden'}>Доска задач</h1>
            <Field />
        </div>
    );
}
